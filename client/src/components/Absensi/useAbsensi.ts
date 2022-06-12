import dayjs, {locale} from 'dayjs';
import {useEffect, useMemo, useState} from 'react';
import {
  Attendance_Type_Enum_Enum,
  useAttendance_GetMyAttendanceTodayQuery,
  useStore_GetStoreByPkQuery,
} from '../../graphql/gql-generated';
import {
  defaultCoords,
  getXHasuraContextHeader,
  useGetLocation,
  useMyUser,
} from '../../shared/utils';
import Config from 'react-native-config';
import turfCircle from '@turf/circle';
import {calculateDistanceKilometer} from '../../shared/utils/calculateDistanceKilometer';
import {UserRolesEnum} from '../../types/user';

const intervalOpenModalAbsensi =
  Config.APP_ENV === 'development' ? 1000 : 5 * 60 * 1000;

interface IUseAbsensiProps {
  onUpdateLocation: (latitude: number, longitude: number) => void;
}

const radiusTokoDalamMeter = 200;

export const useAbsensi = () => {
  const myUser = useMyUser();
  const [isModalAbsensiOpen, setModalAbsensiOpen] = useState(false);
  const onModalAbsensiClose = () => {
    setModalAbsensiOpen(false);
  };

  const getDataToko = useStore_GetStoreByPkQuery({
    variables: {id: myUser.store_id || 0},
    ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  });
  const dataToko = getDataToko.data?.stores_by_pk;
  // console.log(
  //   '🚀 ~ file: useAbsensi.ts ~ line 18 ~ useAbsensi ~ dataToko',
  //   dataToko,
  // );

  const working_hour_start = useMemo(() => {
    const hour = dayjs(dataToko?.working_hour_start).hour();
    const minute = dayjs(dataToko?.working_hour_start).minute();

    const working_hour_start = dayjs().hour(hour).minute(minute);

    return working_hour_start;
  }, [dataToko?.working_hour_start]);

  const [isNeedRecordAttendance, setNeedRecordAttendance] = useState(false);
  const literallyToday = dayjs();

  const myAttendance = useAttendance_GetMyAttendanceTodayQuery({
    variables: {
      user_id: myUser.id,
      working_hour_start: working_hour_start.toISOString(),
    },
    onCompleted: data => {
      // console.log(
      //   '🚀 ~ file: useAbsensi.ts ~ line 62 ~ useAbsensi ~ onCompleted useAttendance_GetMyAttendanceTodayQuery',
      // );
      const todayAttendance = data.attendance?.[0];
      if (
        literallyToday.isAfter(working_hour_start) &&
        data.attendance.length < 1 &&
        myUser.roles.includes(UserRolesEnum.karyawan)
      )
        setNeedRecordAttendance(true);
      else if (
        literallyToday.isAfter(working_hour_start) &&
        todayAttendance?.attendance_type === Attendance_Type_Enum_Enum.Enter &&
        myUser.roles.includes(UserRolesEnum.karyawan)
      )
        setNeedRecordAttendance(false);
    },
  });

  const tokoCoords =
    dataToko?.latitude && dataToko?.longitude
      ? ([dataToko.longitude, dataToko.latitude] as number[])
      : defaultCoords;

  useEffect(() => {
    if (!isNeedRecordAttendance) setModalAbsensiOpen(false);
    const interval = setInterval(() => {
      if (isNeedRecordAttendance) {
        setModalAbsensiOpen(true);
      }
    }, intervalOpenModalAbsensi);
    return () => {
      clearInterval(interval);
    };
  }, [isNeedRecordAttendance]);

  const useGetLocationReturn = useGetLocation({
    onUpdateLocation: (latitude, longitude) => {
      console.log('onUpdateLocation', latitude, longitude);
    },
    currentLocation: null,
    isLazyFetch: false,
  });

  const radiusCircle = turfCircle(tokoCoords, radiusTokoDalamMeter, {
    units: 'meters',
    steps: 64,
  });

  const distanceMeter =
    calculateDistanceKilometer({
      firstCoord: {
        lat: useGetLocationReturn.location?.[1] || 0,
        long: useGetLocationReturn.location?.[0] || 0,
      },
      secondCoord: {
        lat: tokoCoords?.[1] || 0,
        long: tokoCoords?.[0] || 0,
      },
    }) * 1000;

  const maximumDistanceFromToko = radiusTokoDalamMeter;

  return {
    isModalAbsensiOpen,
    onModalAbsensiClose,
    tokoCoords,
    useGetLocationReturn,
    radiusCircle,
    distanceMeter,
    maximumDistanceFromToko,
  };
};

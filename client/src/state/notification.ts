import create from 'zustand';
import {createTrackedSelector} from 'react-tracked';
import {
  useNotification_BulkMarkAsReadMutation,
  useNotification_DeleteReadNotificationsMutation,
  useNotification_GetNotificationsWithReadStatusByUserIdSubscription,
} from '../graphql/gql-generated';
import {getXHasuraContextHeader, useMyUser} from '../shared/utils';
import {useEffect, useMemo} from 'react';
import dayjs from 'dayjs';
import to from 'await-to-js';
import {useToast} from 'native-base';
import {TOAST_TEMPLATE} from '../shared/constants';

interface INotification {
  id: number;
  title?: string | null;
  body?: string | null;
  created_at?: string | null;
  is_read: boolean;
}

interface INotificationState {
  notifications: INotification[];
  total_unread: number;
  updateNotifications: (notifications: INotification[]) => void;
  updateTotalUnread: (total_unread: number) => void;
}

const zustandCartStore = create<INotificationState>((set, get) => ({
  notifications: [],
  total_unread: 0,
  updateNotifications: notifications => {
    set(state => ({...state, notifications}));
  },
  updateTotalUnread: total_unread => {
    set(state => ({...state, total_unread}));
  },
}));

export const useTrackedMyNotification = createTrackedSelector(zustandCartStore);
export const useMyNotification = () => {
  const myUser = useMyUser();
  const tracked = useTrackedMyNotification();
  const toast = useToast();
  const [markAsReadMutation] = useNotification_BulkMarkAsReadMutation({
    ...getXHasuraContextHeader({withUserId: true}),
  });
  const [deleteReadNotifications] =
    useNotification_DeleteReadNotificationsMutation({
      ...getXHasuraContextHeader({role: 'administrator'}),
    });

  const handleMarkAsRead = (notif_ids: number[], is_mark_all?: boolean) => {
    const valid_ids: number[] = [];

    notif_ids.forEach(id => {
      const found = tracked.notifications.find(notif => notif.id === id);
      if (found && found.is_read === false) {
        valid_ids.push(id);
      }
    });
    const mutation = async () => {
      const [err, res] = await to(
        markAsReadMutation({
          variables: {
            objects: valid_ids.map(id => ({
              notification_id: id,
              user_id: myUser.id,
            })),
          },
        }),
      );
      if (err || !res) {
        console.log(
          '🚀 ~ file: notification.ts ~ line 57 ~ mutation ~ err',
          err,
        );
      } else {
        toast.show(
          TOAST_TEMPLATE.success(
            is_mark_all
              ? `Berhasil menandai semua notifikasi menjadi terbaca`
              : `Berhasil menandai notifikasi sebagai terbaca`,
            1000,
          ),
        );
      }
    };
    mutation();
  };

  const handleMarkAllNotifAsRead = () => {
    handleMarkAsRead(
      tracked.notifications.map(notif => notif.id),
      true,
    );
  };

  const handleDeleteReadNotifications = () => {
    const request = async () => {
      const [err, res] = await to(
        deleteReadNotifications({
          variables: {
            _in: tracked.notifications.filter(x => x.is_read).map(x => x.id),
          },
        }),
      );
      if (err || !res) {
        console.log(
          '🚀 ~ file: notification.ts ~ line 110 ~ request ~ err',
          err,
        );
      } else {
        toast.show(
          TOAST_TEMPLATE.success(
            `Berhasil menghapus notifikasi yang sudah terbaca!`,
            1000,
          ),
        );
      }
    };
    request();
  };

  return {
    ...tracked,
    handleMarkAsRead,
    handleMarkAllNotifAsRead,
    handleDeleteReadNotifications,
  };
};

export const useMyNotificationBackgroundTask = () => {
  const myUser = useMyUser();
  const myNotif = useMyNotification();
  // console.log(
  //   '🚀 ~ file: notification.ts ~ line 37 ~ useMyNotificationBackgroundTask ~ myNotif',
  //   myNotif,
  // );

  const getNotifications =
    useNotification_GetNotificationsWithReadStatusByUserIdSubscription({
      variables: {user_id: myUser.id},
    });

  const notifications: INotification[] = useMemo(() => {
    const data = getNotifications.data?.notification;

    if (!data || data?.length <= 0) return [];
    const restructure: INotification[] = data.map(notif => {
      const found = notif.notification_read_users.find(
        x => x.user_id === myUser.id,
      );

      return {
        id: notif.id,
        title: notif.notification_title,
        body: notif.notification_body,
        created_at: dayjs(notif.created_at).format('D/M/YYYY\nH:mm'),
        is_read: found ? true : false,
      };
    });

    return restructure;
  }, [myUser.id, getNotifications.data?.notification]);

  useEffect(() => {
    myNotif.updateNotifications(notifications);
    const total_unread = notifications.reduce(
      (prev: number, notif) => (notif.is_read ? prev : prev + 1),
      0,
    );
    myNotif.updateTotalUnread(total_unread);
  }, [notifications]);
};

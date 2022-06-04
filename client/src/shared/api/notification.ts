import axios from 'axios';
import Config from 'react-native-config';
import {IHeaderGraphqlRequest} from './types';
import to from 'await-to-js';

export class NotificationAPI {
  endpoint: string = `${Config.NHOST_BACKEND_URL}/v1/graphql`;
  accessToken: string;
  headers: IHeaderGraphqlRequest;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
    this.headers = {
      'content-type': 'application/json',
      'x-hasura-role': 'me',
      Authorization: `Bearer ${accessToken}`,
    };
  }

  markAsReadOne(notification_id: number, user_id: string) {
    const request = async () => {
      const data = {
        operationName: 'Notification_MarkAsReadOne',
        query: `mutation Notification_MarkAsReadOne($insert: notification_read_user_insert_input!) {
          insert_notification_read_user_one(object: $insert) {
            id
          }
        }`,
        variables: {
          insert: {
            notification_id,
            user_id,
          },
        },
      };

      const [err, res] = await to(
        axios.post(this.endpoint, data, {headers: {...this.headers}}),
      );
      if (err || !res) {
        console.log(
          '🚀 ~ file: notification.ts ~ line 41 ~ NotificationAPI ~ request ~ err',
          err,
        );
      } else {
        console.log(
          '🚀 ~ file: notification.ts ~ line 41 ~ NotificationAPI ~ request ~ res',
          res,
        );
      }
    };
    request();
  }
}

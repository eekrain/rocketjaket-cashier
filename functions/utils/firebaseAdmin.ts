import { initializeApp, cert } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";

// This value must match with the file rocketjaket-hasura-firebase-adminsdk-72pei-e68995a8b3.json
const serviceAccount = {
  type: "service_account",
  project_id: "rocketjaket-hasura",
  private_key_id: "e68995a8b3e43db0c009bc461f34f8086570fb5c",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCuyvzAhvrVPS/3\n7X4a49a1RAgfTjFh0gIs3nNYObeK3dG3ZnAfn+o3hBQL4hnuSeeTGnfQRL+VtjSN\n2V4evlI28wNGalhxqbfctESsGJYsMPbXYndBqLRxFJ0Pr6f0Tcbu/Q4E35M5en19\nsuiDIv8ig3ZYhXWcT8B6r4LMh3TjfhgzM6qsxkt1Op/nOw6RG3cIxaL6ZpL+pjxZ\n+6vB93r5yLIDxgoc4RvAXKAxFtd/QS0RVplgxGmwf3TAKwYeQIN+TOAtVCPCi5hU\ncfXL3OXiT9EQALIs11QGOj5tRz8FOXfWODjQ0TiuNvCQu2Yi4FHbH2kEK0CKYFpM\ns1xtY0/HAgMBAAECggEAIRrwARTvmAiVN7ti6XvilAVVFnzMTI8me1IMfZa85Q+7\nIyXDMbIrfaVF2LRTnfagZhOawrbqpFPUo1MaiO8aCi8/nQwSQUDYQnRgF0o20xrY\n/ZU4KhbmSg6R6sElqdc7SNNj3tdrfnTtJKwIbqHnuaU1enGYg2j1dycbulojcNyG\nLMEeVoTKkKCdzG6JLI3LAG+P9jds6EFJdgClmIpzbLycTDXMsVj84jsK/Rct7fQ/\nhqN2ntTODMSAQxNASu1y1tSiFN+CZeZiI0NMIKp28tFD4jHnW4bxpM7X2vMjqVvQ\nnFYQMfykXLLjKEAwwnJmD7iaiEJ4XuM//9bhvs7qTQKBgQDi1AzNkRTHM6537ch3\nS323UJpTF177fIa1AxMqsSd+VqU17XfHMVwU5Zdt5Lr3Ax1x5OEiNREwh0d0eM1P\nG4EcXwWFDWkfkVKu0RHwOhRCiC8u0q3nYqOvsw1lomX/Ot9i+swTTmmI0fX/3JmY\ngvznMQFA0c30ejUThsScZVLGQwKBgQDFRcHVVHg7D9QlpJJJ01j5zaClblQ4GKLE\ndC6qjtt5sHNvM1pmniTB/DwfVNeksS6J6il64IP3Caw4A7pp8a+zwa+X5O4yfvB/\nzMnzZnCR1g4Oru1EgYktjeSd71Ac+f6iNqP0llzKQ0mywWgvBTPKJyOrN0M+8E1J\n0uB574dSLQKBgGRBw7LsqFlvz3K0yAFqfZOT7dJCJzpTDRte047wJHukAnv2jRWf\nDIsz+52YFsdtOguIVbYP7JwdfwjNCDop9wQ6P69SgR9x1TDtudcLZL8PgINanYED\nSUQ0iPxeLmUEeY4/OgpigyT1YJ0JvV36r5vkPiCPW0/u4BzUWXyjEFYPAoGAQWve\n2kaHEN8w9cLcGMuUSFOfIP2zxF63K/tztnBl7LdNsOUQ59MuUX662ZEjaqSv0GDt\nnKh0WyrECFeELLpQEIb9Gpx7OhfK3jcmCihA0LxyMQBmA0AKJCdYV+ATa2ikv1rr\niKOM5i7mc/eb+2v4PuQ3+gH7tRWwK/lZJFcBQ4kCgYBg/T30FPk41bbUKS6uC8wC\nsxyMH/bFdaARYycNy2vopg08bQfCph0Bv4iQ/6QTKH37CIEcG8qyDxWlMFHM/9HN\nFi0abiaUsULyCLSx08yv3nxGR9DIdCGaA0K67iY2dVzroQE8PeJYKNz0KyWgRfBj\nh1gRi5B623fgIlmEV5nKzg==\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-72pei@rocketjaket-hasura.iam.gserviceaccount.com",
  client_id: "104412145948567307486",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-72pei%40rocketjaket-hasura.iam.gserviceaccount.com",
};

const app = initializeApp({
  credential: cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key,
  }),
});

export const myFirebaseAdminApp = () => {
  return {
    messaging: getMessaging(app),
  };
};

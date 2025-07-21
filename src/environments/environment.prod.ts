export const environment = {
  production: true,
  apiUrl: 'https://6o6si6hpw7.execute-api.us-east-1.amazonaws.com',
  oidc: {
    authority:           'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_4EmBPrDK0',
    clientId:            '20gb5raf2etl8md7ls4hnnmb5n',
    redirectUrl:         'https://dev.d2h2wqvp0d8ubj.amplifyapp.com/auth-callback',
    postLogoutRedirectUrl: 'https://dev.d2h2wqvp0d8ubj.amplifyapp.com/',
    scope:               'email openid phone',
    responseType:        'code',
    silentRenew:         false,
    useRefreshToken:     false
  }
};

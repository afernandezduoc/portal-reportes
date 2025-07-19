export const environment = {
  production: true,
  apiUrl: 'https://6o6si6hpw7.execute-api.us-east-1.amazonaws.com',
  oidc: {
    authority:           'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_4EmBPrDK0',
    clientId:            '20gb5raf2etl8md7ls4hnnmb5n',
    redirectUrl:         'http://localhost:4200/auth-callback',
    postLogoutRedirectUrl: 'http://localhost:4200/',
    scope:               'email openid phone',
    responseType:        'code',
    silentRenew:         false,
    useRefreshToken:     false
  }
};

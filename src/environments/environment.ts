export const environment = {
  production: false,
  apiUrl: 'https://6o6si6hpw7.execute-api.us-east-1.amazonaws.com',
  oidc: {
    authority:           'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_4EmBPrDK0',
    clientId:            '20gb5raf2etl8md7ls4hnnmb5n',
    redirectUrl:         window.location.origin,
    postLogoutRedirectUrl: window.location.origin,
    scope:               'openid profile email',
    responseType:        'code',
    silentRenew:         true,
    useRefreshToken:     true
  }
};

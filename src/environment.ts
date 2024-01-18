export const environment = {
  production: false,
};

// todo URL de prod à renseigner quand connue
export const ENDPOINT_API = environment.production
  ? ''
  : 'http://localhost:3000/api';

export const ENDPOINT_AUTH_DISCORD = `${ENDPOINT_API}/auth/discord/login`;
export const ENDPOINT_JWT = `${ENDPOINT_API}/auth/discord/getJwtToken`;

export const JWT_TOKEN_KEY = 'pygToken';

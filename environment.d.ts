declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_BASE_URL: string;
      FUNDWISE_BASE_URL: string;
      AUTH0_SECRET: string;
      AUTH0_DOMAIN: string;
      AUTH0_CLIENT_ID: string;
      AUTH0_CLIENT_SECRET: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export { };


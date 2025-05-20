type Config = {
  DEV: boolean;
  BASE_URL: string;
};

export const config: Config = {
  DEV: import.meta.env.DEV || false,
  BASE_URL: import.meta.env.VITE_BASE_URL,
};

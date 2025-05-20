import dotenv from "dotenv";

dotenv.config();

type Config = {
  PORT: number;
  NODE_ENV: string;
  GIPHY_API_KEY: string;
};

export const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "production",
  GIPHY_API_KEY: process.env.GIPHY_API_KEY || "",
};

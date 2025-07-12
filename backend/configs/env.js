import { config } from "dotenv";

config({path:'.env.development.local'});

export const {DB_URL,PORT,CONTRACT_ADDRESS} =process.env;
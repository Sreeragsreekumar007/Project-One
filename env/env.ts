import * as dotenv from "dotenv";
import * as path from "path";

export const getEnv = ()=>{
    const envPath = path.resolve(`env/.env.${process.env.ENV}`);
    dotenv.config({ override: true, path: envPath });
}
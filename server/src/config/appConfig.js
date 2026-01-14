import dotenv from "dotenv"
dotenv.config()

export const appConfig = {
    port:process.env.PORT,
    env:process.env.ENV,
    version:process.env.VERSION,
    db_url:process.env.DB_URI
}
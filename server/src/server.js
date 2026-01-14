import { createApp } from "./app.js";
import { appConfig } from "./config/appConfig.js";
import { dbConfig } from "./config/dbConfig.js";

const app=createApp()

dbConfig()
  .then(() => {
    app.listen(appConfig.port, () => {
      console.log(`Server started at port: ${appConfig.port}`);
    });
  })
  .catch((err) => {
    console.log("Server error: ", err);
  });
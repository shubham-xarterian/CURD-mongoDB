const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = 8082;
const DB_URI = `mongodb+srv://shubhamthorat:ZH8sZbihqcdPmZud@cluster0.vnlaoic.mongodb.net/test`;

app.use(express.json());


mongoose
  .connect(`${DB_URI}`)
  .then(() => console.log("Connected to DB at", DB_URI))
  .catch((e) => console.log("Failed to connect to DB", e));

  app.listen(PORT, () => {
    console.log("Listening at", PORT);
  });

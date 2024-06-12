const express = require("express");
const mongoose = require("mongoose");

const createRoutes = require("./src/routes/create.routes");
const readRoutes = require("./src/routes/read.routes");
const deleteRouter = require("./src/routes/delete.routes");
const updateRouter = require("./src/routes/update.routes");

const app = express();
const PORT = 8082;
const DB_URI = `mongodb+srv://shubhamthorat:ZH8sZbihqcdPmZud@cluster0.vnlaoic.mongodb.net/test`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to server");
});

app.use("/create", createRoutes);
app.use("/read", readRoutes);
app.use("/delete", deleteRouter);
app.use("/update", updateRouter);

mongoose
  .connect(`${DB_URI}`)
  .then(() => console.log("Connected to DB at", DB_URI))
  .catch((e) => console.log("Failed to connect to DB", e));

app.listen(PORT, () => {
  console.log("Listening at", PORT);
});

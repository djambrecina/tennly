import bodyParser from "body-parser";
import express from "express";
import path from "path";

import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`app running on port ${PORT}`);
});

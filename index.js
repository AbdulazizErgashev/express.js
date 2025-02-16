import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  //   res.status(200);
  // res.sendFile(path.join(__dirname, "views", "index.html"));
  res.render("index");
});

app.get("/about", (req, res) => {
  //   res.status(200);
  // res.sendFile(path.join(__dirname, "views", "about.html"));
  res.render("about");
});

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
// https://www.sammi.ac/dashboard/course/node-express/653d5c3a28da4c78b7e07f5c?section=653d596f28da4c78b7e07ed4

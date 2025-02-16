import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
import { create } from "express-handlebars";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
const hbs = create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine());
app.set("view engine", "hbs");
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
// https://www.sammi.ac/dashboard/course/node-express/653d5c4728da4c78b7e07f60?section=653d596f28da4c78b7e07ed4

import dotenv from "dotenv";
import express from "express";
import homeRouter from "./routes/home.route.js";
import contactRouter from "./routes/contact.route.js";
import aboutRouter from "./routes/about.route.js";

dotenv.config();
const app = express();

app.set("view engine", "pug");

app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

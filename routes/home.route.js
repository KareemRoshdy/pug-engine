import express from "express";
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.render("home");
});

export default homeRouter;

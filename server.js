const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const portfolioRoutes = require("./routes/portfolioRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join("frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

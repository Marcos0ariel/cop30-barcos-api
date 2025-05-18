const express = require("express");
const sequelize = require("./database");
const boatRoutes = require("./routes/boatRoutes");

const app = express();
app.use(express.json());
app.use("/boats", boatRoutes);

const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(3000, () => {
      console.log("API rodando em http://localhost:3000");
    });
  } catch (error) {
    console.error("Erro ao iniciar servidor:", error);
  }
};

startServer();

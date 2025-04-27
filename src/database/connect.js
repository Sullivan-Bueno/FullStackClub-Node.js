const mongoose = require("mongoose");
// const express = require("express");

// const app = express();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.oiasm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Conectado ao banco de dados!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDatabase;

// app.get("/home", (req, res) => {
//   res.contentType("application/html");
//   res.status(200).send("<h1>Hello World!</h1>");
// });

// const port = 8080;

// app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

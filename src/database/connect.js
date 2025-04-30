const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.oiasm.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Conectado ao banco de dados!");
    console.log(mongoose.connection.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDatabase;

// app.get("/home", (req, res) => {
//   res.contentType("application/html");
//   res.status(200).send("<h1>Hello World!</h1>");
// });


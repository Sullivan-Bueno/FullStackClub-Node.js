const express = require("express");
const UserModel = require("../src/models/user.model");
const ArtistsModel = require("../src/models/user.model");

const app = express();

// Especifica que os arquivos usados nesse JS serão JSON
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use((req, res, next) => {
  console.log(`Request type: ${req.method}`);
  console.log(`Content type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

// Busca todos os usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/artists", async (req, res) => {
  try {
    const artists = await ArtistsModel.find({});

    res.status(200).json(artists);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});



// Busca o usuário por ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    res.status(200).json(user);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

// Criar usuário dentro da base de dados
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/artists", async (req, res) => {
  try {
    const artist = await ArtistsModel.create(req.body);

    res.status(200).json(artist);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Atualizar o usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Deletar o usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/artists/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const artist = await ArtistsModel.findByIdAndDelete(id);

    res.status(200).json(artist);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
console.log(mongoose.connection.name);

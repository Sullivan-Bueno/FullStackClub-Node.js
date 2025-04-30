const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
});

const songsSchema = new mongoose.Schema({});
const artistsSchema = new mongoose.Schema({});

const UserModel = mongoose.model("User", userSchema);
const ArtistsModel = mongoose.model("artists", artistsSchema);
const SongsModel = mongoose.model("songs", songsSchema);

module.exports = {
  UserModel,
  ArtistsModel,
  SongsModel,
};


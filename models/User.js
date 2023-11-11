const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, "Silahkan Masukkan Nama!"],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Silahkan Isi Email dengan validd!",
    ],
  },
});

module.exports = mongoose.model("users", UserSchema);
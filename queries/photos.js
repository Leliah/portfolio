const db = require("../db/dbConfig.js");

const getAllPhotos = async () => {
    try {
      const allPhotos = await db.any("SELECT * FROM photos");
      return allPhotos;
    } catch (error) {
      return error;
    }
  };


  const getPhoto = async (id) => {
    try {
      const onePhoto = await db.one("SELECT * FROM photos WHERE id=$1", id);
      return onePhoto;
    } catch (error) {
      return error;
    }
  };

  // CREATE
const createPhoto = async (photo) => {
  try {
    const newPhoto = await db.one(
      "INSERT INTO photos (category, url, is_saved) VALUES($1, $2, $3) RETURNING *",
      [photo.category, photo.url, photo.is_saved]
    );
    return newPhoto;
  } catch (error) {
    return error;
  }
};

const deletePhoto= async (id) => {
  try {
    const deletedPhoto = await db.one(
      "DELETE FROM photos WHERE id = $1 RETURNING *",
      id
    );
    return deletedPhoto;
  } catch (error) {
    return error;
  }
};

const updatePhoto = async (id, photo) => {
  try {
    const updatedPhoto = await db.one(
      "UPDATE photos SET category=$1, url=$2, is_saved=$3 where id=$4 RETURNING *",
      [photo.category, photo.url, photo.is_saved, id]
    );
    return updatedPhoto;
  } catch (error) {
    return error;
  }
};

module.exports = {
   getAllPhotos,
   getPhoto,
  createPhoto,
  deletePhoto,
  updatePhoto 
};
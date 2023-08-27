const express = require("express");
const pinterest = express.Router();
const { getAllPhotos, getPhoto, createPhoto, deletePhoto, updatePhoto } = require("../queries/photos");

// INDEX
pinterest.get("/", async (req, res) => {
    const allPhotos = await getAllPhotos();
    if (allPhotos[0]) {
        res.status(200).json(allPhotos);
      } else {
        res.status(500).json({ error: "server error" });
      }
  
  });

  // SHOW
pinterest.get("/:id", async (req, res) => {
    const { id } = req.params;
    const photo = await getPhoto(id);
    if (photo) {
      res.json(photo);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

// CREATE
pinterest.post("/", async (req, res) => {
    try {
      const photo = await createPhoto(req.body);
      res.json(photo);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

  //DELETE
  pinterest.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedPhoto = await deletePhoto(id);
    if (deletedPhoto.id) {
      res.status(200).json(deletedPhoto);
    } else {
      res.status(404).json("Pin not found");
    }
  });

  // UPDATE
pinterest.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedPhoto = await updatePhoto(id, req.body);
    res.status(200).json(updatedPhoto);
  });


module.exports = pinterest;
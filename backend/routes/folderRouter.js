const express = require("express");
const folderRouter = express.Router();
const Folder = require("../model/folderModel");

folderRouter.get("/test", async (req, res) => {
  const folders = await Folder.find({}).lean();
  res.json({
    data: folders,
  });
});

//create a folder
folderRouter.post("/create", async (req, res) => {
  const { folderName } = req.body;
  const createdBy = req.user;
  try {
    const createFolder = await Folder.create({
      folderName: folderName,
      createdBy: createdBy,
    });

    res.status(201).json({
      success: true,
      message: "Folder created successfully",
      data: createFolder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

//delete folder
folderRouter.delete("/delete/:folderId", async (req, res) => {
  const folderId = req.params.folderId;
  try {
    const deleted = await Folder.findByIdAndDelete(folderId);
    if (!deleted) {
      return res.status(400).json({
        success: false,
        message: "Folder not found",
      });
    }
    res.status(200).json({
      success: true,
      data: deleted,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = folderRouter;

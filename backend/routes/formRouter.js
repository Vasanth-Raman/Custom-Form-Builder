const express = require("express");
const validateNewForm = require("../middleware/validateNewForm");
const validateFormId = require("../middleware/validateFormId");
const validateFormUpdate = require("../middleware/validateFormUpdate");
const {
  getForms,
  createForm,
  updateForm,
  deleteForm,
} = require("../controllers/formController");
const formRouter = express.Router();

// reading forms according to dashboard or inside folder
formRouter.get("/dashboard", getForms);

// creating new form
formRouter.post("/create", validateNewForm, createForm);

// updating an existing form
formRouter.put(
  "/update/:formId",
  validateFormId,
  validateFormUpdate,
  updateForm
);

//deleting a form
formRouter.delete("/delete/:formId", validateFormId, deleteForm);

module.exports = formRouter;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bubbleTypes = ["text", "image", "video", "gif"];
const inputTypes = [
  "text",
  "number",
  "email",
  "phone",
  "date",
  "rating",
  "buttons",
];

const formSchema = new Schema({
  formName: {
    type: String,
    required: true,
  },
  flow: [
    {
      title: {
        type: String,
        required: true,
      },
      bubbleOrInput: {
        type: String,
        enum: ["bubble", "input"],
        required: true,
      },
      content: {
        type: {
          type: String,
          enum: [...bubbleTypes, inputTypes],
          required: true,
        },
        data: Schema.Types.Mixed,
      },
      order: {
        type: Number,
        required: true,
      },
    },
  ],
  folderId: {
    type: Schema.Types.ObjectId,
    ref: "Folder",
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;

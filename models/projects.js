const { Schema, model, models } = require("mongoose");

const PorjectSchema = new Schema({
  name: { type: String, required: true },
  admin: { type: String, required: true },
  desc: { type: String, required: true },
  type: { type: String, required: true },
  members: { type: Array, required: true },
});

export const Projects = models.Projects || model("Projects", PorjectSchema);

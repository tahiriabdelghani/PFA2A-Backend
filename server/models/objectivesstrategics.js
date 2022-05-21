import mongoose from "mongoose";

const objectivesstrategicsSchema = new mongoose.Schema({});

const objectivesstrategics = mongoose.model(
  "objectivesstrategics",
  objectivesstrategicsSchema
);
export default objectivesstrategics;

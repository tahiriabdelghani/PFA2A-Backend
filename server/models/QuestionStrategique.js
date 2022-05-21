import mongoose from "mongoose";

const questionsauditstrategicsSchema = new mongoose.Schema({});

const questionsauditstrategics = mongoose.model(
  "questionsauditstrategics",
  questionsauditstrategicsSchema
);

export default questionsauditstrategics;

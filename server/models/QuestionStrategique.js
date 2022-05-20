import mongoose from "mongoose";

const questionsauditstrategicsSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  responsesAndscore: {
    type: Array,
  },
  pourcentage: {
    type: String,
  },
});

const questionsauditstrategics = mongoose.model(
  "questionsauditstrategics",
  questionsauditstrategicsSchema
);

export default questionsauditstrategics;

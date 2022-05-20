import express from "express";
const router = express.Router();
import questionsauditstrategics from "../models/QuestionStrategique.js";

router.post("/", async (req, res) => {
  const objectifs = ["objectif 1", "objectif 2"];
  const rep = req.body;
  console.log(algo(rep, objectifs));
   const newQuestion = new QuestionStrategique(req.bod);
   try {
     const savedQuestion = await newQuestion.save();
     res.status(200).json(savedQuestion);
   } catch (err) {
     res.status(500).json(err);
   }
});

router.get("/", async (req, res) => {
  try {
    const questionsStrategics = await questionsauditstrategics.find({});
    res.status(200).json(questionsStrategics);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const newQuestion = new questionsStrategics(req.body);

  try {
    const savedQuestion = await newQuestion.save();
    res.status(200).json(savedQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

const algo = (rep, objectifs) => {
  var selectedObjectives = [];
  for (const objectif in objectifs) {
    let score = 0;
    for (const response in rep.responses) {
      if (rep.responses[response].objective === objectifs[objectif]) {
        score +=
          rep.responses[response].response.score *
          rep.responses[response].percentage;
      }
    }
    selectedObjectives = [
      ...selectedObjectives,
      { obj: objectifs[objectif], scoreTotal: score },
    ];
  }
  rep.selectedObjectives = selectedObjectives;
  console.log(rep);
  return rep;
};

export default router;

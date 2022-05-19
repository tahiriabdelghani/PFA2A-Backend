import express from "express";
const router = express.Router();
// import QuestionStrategique from "../model/QuestionStrategique.js";

router.post("/", async (req, res) => {
  var repp = {
    userId: "53375",
    responses: [
      {
        quest: "question 1",
        resp: {
          name: "response 1",
          score: "21",
        },
        objectif: "objectif 1",
        prctg: "75",
      },
      {
        quest: "question 1",
        resp: {
          name: "response 1",
          score: "45",
        },
        objectif: "objectif 1",
        prctg: "81",
      },
      {
        quest: "question 2",
        resp: {
          name: "response 3",
          score: "21",
        },
        objectif: "objectif 2",
        prctg: "12",
      },
    ],
  };
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
    const questionsStrategiques = await QuestionStrategique.find({});
    res.status(200).json(questionsStrategiques);
  } catch (err) {
    res.status(500).json(err);
  }
});

const algo = (rep, objectifs) => {
  var objectivesScores = [];
  for (const objectif in objectifs) {
    let score = 0;
    for (const response in rep.responses) {
      if (rep.responses[response].objectif === objectifs[objectif]) {
        score +=
          rep.responses[response].resp.score * rep.responses[response].prctg;
      }
    }
    objectivesScores = [
      ...objectivesScores,
      { obj: objectifs[objectif], scoreTotal: score },
    ];
  }
  rep.objectivesScores = objectivesScores;
  console.log(rep);
  return rep;
};

export default router;

import express from "express";
const router = express.Router();
import questionsauditstrategics from "../models/QuestionStrategique.js";
import objectivesstrategics from "../models/objectivesstrategics.js";
import HistoriqueResponseAuditStrategique from "../models/historiqueResponseAuditStrategique.js";

//Enregistrement des reponses et des resultats de l'audit dans la base donnees
router.post("/", async (req, res) => {
  const objectifs = ["objectif 1", "objectif 2"];
  const rep = req.body;
  console.log(algo(rep, objectifs));
  const NewHistoriqueResponseAuditStrategique =
    new HistoriqueResponseAuditStrategique(algo(rep, objectifs));
  try {
    const SavedHistoriqueResponseAuditStrategique =
      await NewHistoriqueResponseAuditStrategique.save();
    res.status(200).json(SavedHistoriqueResponseAuditStrategique);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get des questions de l'audit strategique
router.get("/", async (req, res) => {
  try {
    const questionsStrategics = await questionsauditstrategics.find({});
    res.status(200).json(questionsStrategics);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get des objectives strategiques
router.get("/objectives-strategics", async (req, res) => {
  try {
    const objectivesStrategics = await objectivesstrategics.find({});
    res.status(200).json(objectivesStrategics);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get des reponses et et des resultats d'un utilisateur
router.get("/:userId", async (req, res) => {
  try {
    const historique = await HistoriqueResponseAuditStrategique.find({
      userId: req.params.userId,
    });
    res.status(200).json(historique);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Algorithme qui va calculer le score de chaque objectif
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

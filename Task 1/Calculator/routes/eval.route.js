const express = require("express");
const { Calculate } = require("../controllers/eval.controller");
const router = express.Router();

router.get("/test_eval", (req, res) => {
  console.log("Test Evaluating");
  res.json({
    message: "Testing api is successfull, Proceed with Evaluation step",
    status: true,
  });
});

router.post("/eval", Calculate);

module.exports = router;

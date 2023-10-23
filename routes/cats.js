const fetch = require("node-fetch");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const catFact = await fetch(`https://catfact.ninja/fact`).then((res) =>
    res.json()
  );
  res.render("cats", { catFact });
});

module.exports = router;

// dependencies
const router = require("express").Router();

// routes
router.post("/login", (req, res) => {
  if (typeof req.body.password === "string" && req.body.password === process.env.PASSWORD) {
    res.json({ passwordCorrect: true });
  } else {
    res.json({ passwordCorrect: false });
  }
});

// export router
module.exports = router;
const express = require("express");
const {
  getBeers,
  getBeerById,
  addComment,
  updateKegVotes,
  getLowCalBeers
} = require('../controllers/beerController');
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// get all
router.get("/", getBeers);

// get low-calorie beers
router.get("/low-cal", getLowCalBeers);

// get one
router.get("/:id", getBeerById);

// add review to beer
router.patch("/:id/comments", requireAuth, addComment);

// update kegs (votes)
router.patch("/:id/kegs", requireAuth, updateKegVotes);


module.exports = router;
 
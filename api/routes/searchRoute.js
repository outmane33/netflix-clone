const express = require("express");
const {
  searchPerson,
  searchMovie,
  searchTv,
  getSearchHistory,
  removeItemFromSearchHistory,
} = require("../services/searchService");
const { protect } = require("../services/authService");

const router = express.Router();

router.use(protect);

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHistory);

router.delete("/history/:id", removeItemFromSearchHistory);

module.exports = router;

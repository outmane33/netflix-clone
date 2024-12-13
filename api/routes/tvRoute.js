const express = require("express");
const {
  getTrendingTv,
  getTvTrailers,
  getTvDetails,
  getSimilarTvs,
  getTvsByCategory,
} = require("../services/tvService");
const { protect } = require("../services/authService");
const router = express.Router();

router.use(protect);

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);

module.exports = router;

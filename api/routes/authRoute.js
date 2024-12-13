const express = require("express");
const {
  signUp,
  signIn,
  signOut,
  authCheck,
  protect,
} = require("../services/authService");
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", signIn);
router.post("/logout", signOut);
router.get("/authCheck", protect, authCheck);

module.exports = router;

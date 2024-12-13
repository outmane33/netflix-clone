const expressAsyncHandler = require("express-async-handler");

const ApiError = require("../utils/apiError");
const { fetchFromTMDB } = require("../utils/tmdb");

exports.getTrendingMovie = expressAsyncHandler(async (req, res, next) => {
  const data = await fetchFromTMDB(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  );
  const randomMovie =
    data.results[Math.floor(Math.random() * data.results?.length)];

  res.json({ success: true, content: randomMovie });
});

exports.getMovieTrailers = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );
    res.json({ success: true, trailers: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

exports.getMovieDetails = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    res.status(200).json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

exports.getSimilarMovies = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );
    res.status(200).json({ success: true, similar: data.results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

exports.getMoviesByCategory = expressAsyncHandler(async (req, res, next) => {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
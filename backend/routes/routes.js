import express from "express";
import videoController from "../controllers/videoController.js";

const router = express.Router();

router.get("/:videoId", videoController.streamVideo);

export default router;
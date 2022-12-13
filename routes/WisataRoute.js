import express from "express";
import {
    getTempat,
    getTempatById,
    createTempat,
    updateTempat,
    deleteTempat,
} from "../controller/TempatWisata.js";

const router = express.Router();

router.get("/tempats", getTempat);
router.get("/tempat/:id", getTempatById);
router.post("/tempat", createTempat);
router.patch("/tempat/:id", updateTempat);
router.delete("/tempat/:id", deleteTempat);

export default router;
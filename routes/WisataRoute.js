import express from "express";
import {
    getTempat,
    getTempatById,
    createTempat,
    updateTempat,
    deleteTempat
} from "../controller/TempatWisata.js";

const router = express.Router();

router.get("/tempat", getTempat);
router.get("/tempatt/:id", getTempatById);
router.post("/tempatt", createTempat);
router.patch("/tempatt/:id", updateTempat);
router.delete("/tempatt/:id", deleteTempat);

export default router;
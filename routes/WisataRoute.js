import express from "express";
import {
    getTempat,
    getTempatById
} from "../controller/TempatWisata.js";

const router = express.Router();

router.get("/tempat", getTempat);
router.get("/tempat/:id", getTempatById);

export default router;
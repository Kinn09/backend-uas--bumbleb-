import express from "express";
import {
    getTempat
} from "../controller/TempatWisata.js";

const router = express.Router();

router.get("/tempat", getTempat);

export default router;
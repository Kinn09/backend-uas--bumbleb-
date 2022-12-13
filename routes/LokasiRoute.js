import express from "express";
import {
    getLokasi,
    getLokasiById,
    createLokasi,
    updateLokasi,
    deleteLokasi,
    getLocation,
} from "../controller/LokasiWisata.js"

const router = express.Router();

router.get("/lokasis", getLokasi);
router.get("/lokasi/:id", getLokasiById);
router.post("/lokasi", createLokasi);
router.patch("/lokasi/:ig",updateLokasi)
router.delete("/lokasi/:id", deleteLokasi);
router.get("/location", getLocation);

export default router;
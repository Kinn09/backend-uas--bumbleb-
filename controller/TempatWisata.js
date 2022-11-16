import Wisata from "../model/WisataModel.js";

export const getTempat = async(req, res) => {
    try {
        const response = await Wisata.findAll();
        req.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
}

export const getTempatById = async (req, res) => {
    try {
        const response = await Wisata.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
}

export const createTempat = async (req, res) => {
    try {
        // INSERT
        await Wisata.create(req.body);
        res.status(201).json({ msg: 'Wisata Created'})
    } catch (error) {
        console.log(error.messagge);
    }
}
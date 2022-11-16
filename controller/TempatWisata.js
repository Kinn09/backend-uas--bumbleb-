import Wisata from "../model/WisataModel.js";

export const getTempat = async(req, res) => {
    try {
        const response = await Wisata.findAll();
        req.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
}
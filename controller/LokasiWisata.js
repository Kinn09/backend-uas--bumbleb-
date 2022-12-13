import Lokasi from "../model/LokasiModel.js";
import path from "path";
import fs from "fs";

export const getLokasi = async ( req, res ) => {
    try {
        const response = await Lokasi.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.messagge);
    }
};

export const getLokasiById = async (req, res) => {
    try {
        const response = await Lokasi.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(response);
    } catch (error) {
        console.log(error.messagge);
    }
};

export const createLokasi = (req, res) => {
    // INSERT INTO Wisata VALUES 
    if (req.files === null || req.files === undefined)
      return res.status(400).json({ msg: "No File Uploaded" });
    const { nama, alamat, deskripsi, biayamasuk, wisataId } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = [".png", ".jpg", ".jpeg"];
  
    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });
  
    file.mv(`./public/images/${fileName}`, async (err) => {
      if (err) return res.status(500).json({ msg: err.message });
      try {
        await Lokasi.create({
          nama: nama,
          alamat: alamat,
          deskripsi: deskripsi,
          biayamasuk: biayamasuk,
          image: fileName,
          url: url,
          wisataId: wisataId,
        });
        res.status(201).json({ msg: "Lokasi Created Successfuly" });
      } catch (error) {
        console.log(error.message);
      }
    });
  };

  export const updateLokasi = async (req, res) => {
    // UPDATE product SET (...) WHERE id = ?
    const lokasi = await Lokasi.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!lokasi) return res.status(404).json({ msg: "No Data Found" });
  
    let fileName = "";
    if (req.files === null) {
      fileName = lokasi.image;
    } else {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];
  
      if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
      if (fileSize > 5000000)
        return res.status(422).json({ msg: "Image must be less than 5 MB" });
  
      const filepath = `./public/images/${lokasi.image}`;
      fs.unlinkSync(filepath);
  
      file.mv(`./public/images/${fileName}`, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    }
    const { nama, alamat, deskripsi, biayamasuk, wisataId } = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  
    try {
      await Lokasi.update(
        { nama: nama, alamat: alamat, deskripsi: deskripsi,biayamasuk: biayamasuk,wisataId: wisataId, image: fileName, url: url,  },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({ msg: "Lokasi Updated Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deleteLokasi = async (req, res) => {
    // DELETE FROM product WHERE id = ?
    const lokasi = await Lokasi.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!lokasi) return res.status(404).json({ msg: "No Data Found" });
  
    try {
      const filepath = `./public/images/${lokasi.image}`;
      fs.unlinkSync(filepath);
      await Lokasi.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Lokasi Deleted Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getLocation = async (req, res) => {
    try {
      const response = await Lokasi.findAll({
        where: {
          wisataId: 1,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  };
  
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Wisata = db.define("Tempat", {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    biayamasuk: DataTypes.INTEGER,
}, {
    freezeTableName: true
});

export default Wisata;

(async() => {
    await db.sync();
})();
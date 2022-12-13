import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Wisata from "./WisataModel.js";

const { DataTypes } = Sequelize;

const Lokasi = db.define(
    "lokasi",
    {
      uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 100],
        },
      },
      biayamasuk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
 
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 100],
        },
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      image: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      freezeTableName: true
    }
  );

Wisata.hasMany(Lokasi);

Lokasi.belongsTo(Wisata,{
    foreignKey: "wisataId",
});

export default Lokasi;
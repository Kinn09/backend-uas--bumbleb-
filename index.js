import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import WisataRoute from "./routes/WisataRoute.js";
import db from "./config/database.js";


const app = express();

(async () => {
    await db.sync();
})();

app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(WisataRoute);

app.listen(5000, () => console.log('server running on port 5000'));
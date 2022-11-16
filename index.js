import express from "express";
import cors from "cors";
import WisataRoute from "./routes/WisataRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(WisataRoute);

app.listen(5000, () => console.log('server running on port 5000'));
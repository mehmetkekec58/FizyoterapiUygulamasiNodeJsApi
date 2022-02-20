const express = require('express');
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute= require("./routes/authRouter");
const hastalikRoute= require("./routes/hastalikRouter");
const denemeRoute= require("./routes/denemeRouter");
const icerikRouter= require("./routes/icerikRouter")

dotenv.config();
app.use(express.json());
//app.use(morgan("common"));
app.use(helmet());
app.get("/", (req, res) => {
    res.send("anasayfa")
})

app.use("/api/auth", authRoute);
app.use("/api/hastalik", hastalikRoute);
//app.use("/api/deneme", denemeRoute);
app.use("/api/icerik", icerikRouter)

app.listen(8080, () => 
    console.log("Server başlatıldı"))



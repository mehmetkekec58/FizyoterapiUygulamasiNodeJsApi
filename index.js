const express = require('express');
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const router= require("./routes/authRouter");
/*const AuthService=require("./services/authService")
const User = require("./models/user")*/

dotenv.config();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
//app.use('/', express.static('routes'));
app.get("/", async (req, res) => {
    res.send("anasayfa")
})

app.use("/api/auth", router);

app.listen(8080, () => 
    console.log("Server baslatildi"))



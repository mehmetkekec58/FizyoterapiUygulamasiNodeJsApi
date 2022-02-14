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
 /* const ne= new User(2,"mehmetkekec","Mehmet","Kekeç",34);
rr = await AuthService.register(ne)
console.log(rr)
  tt=await AuthService.login(ne)
    res.send(tt)
    console.log(tt)*/
    //  res.status(200).json(tt)
    res.send("Hello world")
})

/*app.get("/api/auth/login", (req,res)=>{
    res.send("lpogin")
})*/

app.use("/api/auth", router);

app.listen(8080, () => 
    console.log("Server baslatildi"))



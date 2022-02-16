const router = require('express').Router();
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const UserDto = require("../models/dto/userDto");

const authService = require('../services/authService');

const constMessage = require("../constants/messages")
const defaultValue = require("../constants/defaultValue")

const successDataResult = require("../result/successDataResult");
const errorResult = require("../result/errorResult")
const errorDataResult = require("../result/errorDataResult")
const successResult = require("../result/successResult");

const passwordHash2 = require('../helper/passwordHashHelper');




router.post("/login", async (req, res) => {
 try {
    const auth = await authService.login(await new UserDto(req.body.email, req.body.password))
    if (auth.success) {
      res.status(200).json(await new successDataResult(auth.data,constMessage.GirisBasarili))
    }else{
      res.status(500).json(await new errorResult(auth.message))
    }
  } catch (error) {
    res.status(500).json(await new errorResult(constMessage.BirSeylerYanlisGitti))
  }

})

router.post("/register", async (req, res) => {

   const auth = await authService.register( await new User(req.body.userName, req.body.firstName, req.body.lastName,
    req.body.password, req.body.age, req.body.email, defaultValue.defaultPhotoUrl, req.body.aboutMe))
    if (auth.success) {
      res.status(200).json(new successResult(auth.message))
    }else{
      res.status(500).json(new errorResult(auth.message))
    }


})

module.exports = router;
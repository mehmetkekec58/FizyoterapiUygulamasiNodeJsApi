const router = require('express').Router();

const authService = require('../services/authService');

const constMessage = require("../constants/messages")

const successDataResult = require("../result/successDataResult");
const errorResult = require("../result/errorResult")
const errorDataResult = require("../result/errorDataResult")
const successResult = require("../result/successResult");






router.post("/login",  async (req, res) => {
  try {
    const auth = await authService.login(req.body)
    if (auth.success) {
      res.status(200).json(new successDataResult(auth.data, constMessage.girisBasarili))
    } else {
      res.status(500).json(auth)
    }
  } catch (error) {
    res.status(500).json(new errorResult(constMessage.birSeylerYanlisGitti))
  }


})

router.post("/register", async (req, res) => {
try {
  const auth = await authService.register(req.body)
  if (auth.success) {
    res.status(200).json(auth)
  } else {
    res.status(500).json(auth)
  }

} catch (error) {
  res.status(500).json(new errorResult(constMessage.birSeylerYanlisGitti))
}
 

})

module.exports = router;
import express from "express"
const router = express.Router()
import formController from "../controller/formController.js"


router.post("/create",formController.createForm)





export default router
import { Router} from 'express'
import User from '../controller/user.controler.js'
const Rout = Router()

Rout.route("/register",User)

export default Rout
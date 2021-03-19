import express from 'express'
import {authUser,getUserProofile,registerUser,updateUserProofile} from '../controllers/userControllers.js'
import {protect} from '../middlewae/authMiddleware.js'
const router = express.Router()

router.route('/').post(registerUser)
router.post('/login',authUser)
router.route('/profile').get( protect, getUserProofile).put(protect,updateUserProofile)



export default router
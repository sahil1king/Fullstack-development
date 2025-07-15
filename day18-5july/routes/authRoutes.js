import express from "express"
import{
    login,
    logout,
    signup,
    verifyEmail,
    forgotPassword,
    resetPassword,
    checkAuth,
}from"../controller/authController.js"
import{verifyToken} from "../middleware/verifyToken.js"

const router=express.Router()

router.get("/check-auth",verifyToken,checkAuth)

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

router.post("/verify-email",)

export default router
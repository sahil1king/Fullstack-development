import { User } from ".../models/userModel.js";

export const signup = async (req,res)=>{
    const {email, password, name } = req.body;

    try{
        if(!email || !password || !name){
            throw new Error ("All fields are required");
        }

        const userAlreadyExists = await User.findOne({ email })

        console.log("userAlreadyEXists",userAlreadyExists);

        if(userAlreadyExists){
            return res.status(400).json({ success: false, })
        }

        const hashedPassword = await bcryptjs.hash(password,10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt : Date.now() + 24 * 60 * 60 * 1000 // 24 hours 
        });

        await user.save()

        //JWT
        generate
    }
}
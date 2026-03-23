const User = require("./../models/User")

//post method for auth
const signup =async(req,res)=>{
    try{
        const data = req.body
        const newuser = new User(data)
        const response = await newuser.save()
        console.log("User Auth data Saved")
        res.status(200).json(response);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
}

// LOGIN
const login = async (req,res)=>{
    try{
        const {username,password} = req.body
        const user = await User.findOne({username})
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        if(user.password !== password){
            return res.status(401).json({message:"Invalid password"})
        }

        res.status(200).json({
            message:"Login successful",
            user:user
        })

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
}

module.exports = {signup,login}

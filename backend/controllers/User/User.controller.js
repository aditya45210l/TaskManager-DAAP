import User from "../../models/user.model.js";

export const getProfile = (req, res, next) => {
  try {
    const profile = req.query.profile;
    const user = User.findOne({ wallet: profile });
    if (!user) {
        throw new Error("User not found");
    }
    res.status(201).json({
        success:true,
        message:"User found",
        data: user,
    })
  } catch (error) {
    next(error);
  }
};

export const createUser = (req,res,next) =>{
    try{
        const {userName,wallet} = req.body;
        if(userName){
          User.create({name : userName,wallet: wallet,rating:0,earning:0,});
        }
    }catch(error){
        next(error);
    }
}
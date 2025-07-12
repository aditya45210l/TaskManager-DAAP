import User from "../../models/user.model.js";

export const getProfile = async (req, res, next) => {
  try {
    console.log("i called by frontend getProfile ✅!");
    const wallet = await req.user;
    const user = await User.findOne({ wallet: wallet });
    if (!user) {
      return res.status(200).json({
        sussess: false,
        isUser: false,
        message: "User not found",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      isUser: true,
      message: "User found",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    console.log("i called by frontend createUser ✅!");
    const { userName } = req.body;
    const wallet = await req.user;
    if (userName && wallet) {
      const user = await User.create({
        name: userName,
        wallet: wallet,
        rating: 0,
        earning: 0,
      });
      if (!user) {
        throw new Error("user already exist");
      }

      return res.status(201).json({
        success: true,
        message: "User created",
        data: user,
      });
    } else {
      const user = await User.create({
        name: wallet.slice(0, 4) + "..." + wallet.slice(-4, wallet.length),
        wallet: wallet,
        rating: 0,
        earning: 0,
      });
      if (!user) {
        throw new Error("user already exist");
      }
      res.status(201).json({
        success: true,
        message: "User created by wallet",
        data: user,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    console.log("user clalled for update user ✅!");
    const { userName } = await req.body;
    const address = await req.user;
    if(String(userName).length < 3){
      throw new Error("Length must be more the 3");
      
    }
    const updatedUser = await User.findOneAndUpdate(
      { wallet: address },
      {
        name: userName,
      }
    );
    if (!updatedUser) {
      throw new error(`User with address ${address} not found.`);
    }
    return res.status(201).json({
      success: true,
      data: updatedUser,
      message: "user updated!",
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

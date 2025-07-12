import { jwtVerify } from "jose";

 const  authMiddleware = async (req, res, next) => {
  try {
    console.log("i called middleware")
    const {session} = await req.cookies;
    if (!session) {
      console.log("session not found!");
      return res.status(401).json({
        success: false,
        message: "session not found!",
      });
    }
    const { payload } = await jwtVerify(
      session,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    req.user = payload.address;
    
    console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "token expirede or invalid",
    });
  }
};

export default authMiddleware;
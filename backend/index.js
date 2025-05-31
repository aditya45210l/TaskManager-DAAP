import express from "express";

import taskRouter from "./routers/task.router.js";
import userRouter from "./routers/user.router.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import connectToDatabase from "./database/mongodb.js";
import listenForEvents from "./listning.js";

const app = express();

app.use('/api/v1/user',userRouter);
app.use('/api/v1/task',taskRouter);
app.get('/',(req,res) =>{
    res.send('Hello World!');
});

app.use(errorMiddleware);

app.listen(3000, async() =>{
    console.log('Server is running on port http://localhost:3000');
    await connectToDatabase();
    await listenForEvents();
})
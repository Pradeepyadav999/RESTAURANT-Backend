import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js"


const app=express()
//we have to give path where we store the name of envirentmet variable 
dotenv.config({path: "./config/config.env"})

app.use(
    cors({
    // in origin we give the name of more frontend port if we want to connect more fronend with this backend
    origin:[process.env.FRONTEND_URL],
    //in methods what type of methods we use GET POST PUT DELETE //we only send data in our backend 
    methods: ["POST"],
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter);

dbConnection();

app.use(errorMiddleware)

export default app;

//ye path hai /api/v1 har rwuuest ko postman pe jae chek krne ka   http://localhost:4000/api/v1/reservation/send





// import express from "express";
// import dotenv, { config } from "dotenv";
// import cors from "cors";
// import { errorMiddleware } from "./middlewares/error.js";
// import reservationRouter from "./routes/reservationRoute.js";
// import { dbConnection } from "./database/dbConnection.js";

// const app = express();
// dotenv.config({ path: "./config.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/reservation", reservationRouter);
// app.get("/", (req, res, next)=>{return res.status(200).json({
//   success: true,
//   message: "HELLO WORLD AGAIN"
// })})

// dbConnection();

// app.use(errorMiddleware);

// export default app;





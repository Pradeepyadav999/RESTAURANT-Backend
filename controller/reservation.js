// // create this to take data from frontend

// import ErrorHandler from "../error/error.js";
// import {Reservation} from "../models/reservationSchema.js";

// export const sendReservation = async(req,res,next)=>{
//     const {firstName,lastName,email,phone,date,time}=req.body;

//     //condition anything is not present  than give error
//     if(!firstName || !lastNme || !email || !phone|| !date || !time){
//         return next(new ErrorHandler("Please fill full reservation form!",400));
//     }
//     try{ 
//         //if dont use await it give error 
//         await Reservation.create(
//             firstName,
//             lastName,
//             email,
//             phone,
//             date,
//             time
//         );
//         res.status(200).json({
//             success: true,
//             message: "Reservation Sent Successfull"
//         });
//     }catch(error){
//         //give this code gpt and find meaning and understand
//         if(error.name === "ValidationError"){
//             const validationErrors = Object.values(error.errors).map(
//                 (err)=>err.message
//             );
//             return next(new ErrorHandler(validationErrors.join(" , "),400));
//         }
//         return next(error);
//     }
// };









// Create this to take data from frontend
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const send_reservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    // Validate all fields
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill the full reservation form!", 400));
    }

    try {
        // Create a new reservation document
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });

        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully"
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};

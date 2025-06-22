// Message is already exist in error class

class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

//we have to create middleware fro accesing the error handler
export const errorMiddleware=(err,req,res,next)=>{
    err.message=err.message || "Internal Server Error!",
    err.statusCode=err.statusCode || 500;

    return res.status(err.statusCode).jason({
        success:false,
        message:err.message,
    });
};

export default ErrorHandler;
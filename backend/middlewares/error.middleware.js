const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(err);

    if (error.name === "CastError") {
      const message = `Resource not found. Invalid: ${error.path}`;
      error = new Error(message);
      error.statusCode = 404;
    }
    if (error.code === 11000) {
      const message = `Duplicate field value entered`;
      error = new Error(message);
      error.statusCode = 400;
    }

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((val) => val.message);
      error = new Error(message);
      error.statusCode = 400;
    }

    res.send(error.statusCode || 500).json({
      success: false,
      error: error.message || "Server Error",
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;

export const response = (res, statusCode, data) => {
  res.status(statusCode).json({
    success: true,
    data
  });
};

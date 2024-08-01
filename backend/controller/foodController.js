const Food = require("../model/foodModel");

exports.add = async (req, res, next) => {
  try {
    const data = req.body;
    let food = new Food(data);
    await food.save();
    res.status(200).json({
      message: "Food added successfully",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

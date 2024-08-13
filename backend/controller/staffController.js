const Staff = require("../model/staffModel");

exports.add = async (req, res, next) => {
  try {
    const data = req.body;
    let staff = new Staff(data);
    await staff.save();
    res.status(200).json({
      message: "Staff Added",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await Staff.findOne({ staffUserId: req.params.staffId });
    res.status(200).json({
      message: "Staff Retrived",
      staff: data,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const data = await Staff.find();
    res.status(200).json({
      message: "All Staff Retrieved",
      totalStuff: data.length,
      staff: data,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

exports.edit = async (req, res, next) => {
  try {
    const data = req.body;
    await Staff.updateOne({ staffUserId: req.params.staffId }, { $set: data });
    res.status(200).json({
      message: "Staff Edit Complete",
      staff: data,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await Staff.findOneAndDelete({ staffUserId: req.params.staffId });
    res.status(200).json({
        message: "Staff Deleted",
    })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

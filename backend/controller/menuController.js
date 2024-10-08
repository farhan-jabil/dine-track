const Menu = require("../model/menuModel");

exports.add = async (req, res, next) => {
  try {
    const data = req.body;
    let menu = new Menu(data);
    await menu.save();
    res.status(200).json({
      message: "Menu added successfully",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

exports.getBySku = async (req, res, next) => {
  try {
    const data = await Menu.findOne({ foodSku: req.params.foodSku });
    res.status(200).json({
      message: "Item retrived",
      menu: data,
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
    const data = await Menu.find();
    res.status(200).json({
      message: "All Menu Retrieved",
      totalMenu: data.length,
      menu: data,
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
    await Menu.updateOne({ foodSku: req.params.foodSku }, { $set: data });
    res.status(200).json({
      message: "Item Edit Complete",
      menu: data,
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
    await Menu.findOneAndDelete({ foodSku: req.params.foodSku })
    res.status(200).json({
      message: "Item Deleted"
    })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }
    next(error);
  }
};

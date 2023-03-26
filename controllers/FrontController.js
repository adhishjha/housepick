const SliderModel = require("../models/slider");
const PropertyModel = require("../models/property");

class FrontController {
  static home = async (req, res) => {
    try {
      const sliders = await SliderModel.find().sort({ _id: -1 });
      res.render("index", { sliders: sliders });
    } catch (error) {
      console.log(error);
    }
  };

  static about = (req, res) => {
    res.render("about");
  };

  static property = async (req, res) => {
    try {
      const result = await PropertyModel.find().sort({ _id: -1 });
      res.render("property", { r: result });
    } catch (error) {
      console.log(error);
    }
  };

  static blog = (req, res) => {
    res.render("blog");
  };

  static contact = (req, res) => {
    res.render("contact");
  };

  static propertyDetail = async (req, res) => {
    try {
      const result = await PropertyModel.findById(req.params.id);
      res.render("property-detail", { item: result });
    } catch (error) {
      console.log(error);
    }
  };

  static sliderPropertyDetail = async (req, res) => {
    try {
      const result = await SliderModel.findById(req.params.id);
      res.render("slider_property_detail", { item: result });
    } catch (error) {
      console.log(error);
    }
  };

  static blogDetail = (req, res) => {
    res.render("blog-detail");
  };

  static agentDetail = (req, res) => {
    res.render("agent-detail");
  };

  static login = (req, res) => {
    try {
      res.render("login", { message: req.flash("success") });
    } catch (error) {
      console.log(error);
    }
  };

  static register = async (req, res) => {
    try {
      res.render("register", { message: req.flash("error") });
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = FrontController;

const BlogModel = require("../../models/blog");
const cloudinary = require("cloudinary").v2;

class BlogController {
  static blogDisplay = async (req, res) => {
    try {
      const data = await BlogModel.find().sort({ _id: -1 });
      res.render("admin/blog/blog_display", { d: data });
    } catch (error) {
      console.log(error);
    }
  };

  static blogInsert = async (req, res) => {
    try {
      const { title, description } = req.body;
      const image = req.files.image;

      const imageresult = await cloudinary.uploader.upload(image.tempFilePath, {
        folder: "housepick/blogImages",
      });

      const insert = new BlogModel({
        image: {
          public_id: imageresult.public_id,
          url: imageresult.secure_url,
        },
        title: title,
        description: description,
      });
      await insert.save();
      res.redirect("/admin/dashboard/blog");
    } catch (error) {
      console.log(error);
    }
  };

  static blogView = async (req, res) => {
    try {
      const data = await BlogModel.findById(req.params.id);
      res.render("admin/blog/blog_view", { item: data });
    } catch (error) {
      console.log(error);
    }
  };

  static blogEdit = async (req, res) => {
    try {
      const data = await BlogModel.findById(req.params.id);
      res.render("admin/blog/blog_edit", { item: data });
    } catch (error) {
      console.log(error);
    }
  };

  static blogUpdate = async (req, res) => {
    try {
      const { title, description } = req.body;

      if (req.files) {
        const image = req.files.image;

        const data = await BlogModel.findById(req.params.id);

        const imageid = data.image.public_id;
        await cloudinary.uploader.destroy(imageid);

        const imageresult = await cloudinary.uploader.upload(
          image.tempFilePath,
          {
            folder: "housepick/blogImages",
          }
        );

        const update = await BlogModel.findByIdAndUpdate(req.params.id, {
          image: {
            public_id: imageresult.public_id,
            url: imageresult.secure_url,
          },
          title: title,
          description: description,
        });

        await update.save();
        res.redirect("/admin/dashboard/blog");
      } else {
        const update = await BlogModel.findByIdAndUpdate(req.params.id, {
          title: title,
          description: description,
        });

        await update.save();
        res.redirect("/admin/dashboard/blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  static blogDelete = async (req, res) => {
    try {
      const data = await BlogModel.findById(req.params.id);
      const imageid = data.image.public_id;
      await cloudinary.uploader.destroy(imageid);
      await BlogModel.findByIdAndDelete(req.params.id);
      res.redirect("/admin/dashboard/blog");
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = BlogController;

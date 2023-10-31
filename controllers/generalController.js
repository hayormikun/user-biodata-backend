const User = require("../models/user");
const cloudinary = require("../cloudinary");

const user_info = async (req, res) => {
  // const {
  //   company,
  //   name,
  //   email,
  //   phone,
  //   language,
  //   domain,
  //   project,
  //   images,
  //   message,
  // } = req.body;

  console.log(req.body)

  // const uploadedImgs = await Promise.all(
  //   images.map(async (image) => {
  //     const upload = await cloudinary.uploader.upload(
  //       image,
  //       {
  //         upload_preset: process.env.CLOUDINARY_PRESET,
  //         public_id: `project_${new Date()}`,
  //         allowed_formats: ["png", "jpg", "jpeg"],
  //       },
  //       function (error, result) {
  //         if (error) {
  //           console.log(error);
  //         }

  //        const imgUrl = result.json()
  //        console.log(imgUrl.secure_url)
  //        return imgUrl.secure_url
  //       }
  //     );
  //     return upload;
  //   })
  // );

  // if (uploadedImgs != "undefned") {
  //   const user = new User({
  //     company,
  //     name,
  //     email,
  //     phone,
  //     language,
  //     domain,
  //     project,
  //     images: uploadedImgs,
  //     message,
  //   });

  //   user
  //     .save()
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
};

module.exports = {
  user_info,
};

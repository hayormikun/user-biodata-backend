const User = require("../models/user");
const cloudinary = require("../cloudinary");
const sendmail = require("../sendmail");

const user_info = async (req, res, next) => {
  const { company, name, email, phone, language, domain, project, message } =
    req.body;

  const uploadedImgs = await Promise.all(
    req.files.images.map(async (image) => {
      const upload = await cloudinary.uploader.upload(
        image.path,
        {
          upload_preset: process.env.CLOUDINARY_PRESET,
          public_id: `${image.filename}`,
          allowed_formats: ["png", "jpg", "jpeg"],
        },
        function (error, result) {
          if (error) {
            console.log(error);
          }
        
          return {
            extention: result.format,
            url: result.secure_url,
            filename: result.original_filename
          };
        }
      );
      
      return {
        extension: upload.format,
        url: upload.secure_url,
        filename: upload.original_filename
      };
    })
  );
 
  if (uploadedImgs != "undefned") {
    const user = new User({
      company,
      name,
      email,
      phone,
      language,
      domain,
      project,
      images: uploadedImgs,
      message,
    });

    user
      .save()
      .then((data) => {
   
        sendmail(data)
        res.send(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

module.exports = {
  user_info,
};

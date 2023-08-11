const PostModel = require("../models/post.model");


// il semble il y avoir un bug qui empeche l'excution de la deuxieme partie du code pour l'instant
module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    return res.status(400).json({ message: "Merci d'ajouter un message" });
  }

  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  console.log("ok");
  return res.status(200).json(post);
};

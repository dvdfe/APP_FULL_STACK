const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch {
    res.status(404).json({ message: "Aucun post trouvé" });
  }
};

module.exports.createPost = async (req, res) => {
  try {
    if (!req.body.message || !req.body.author) {
      return res
        .status(400)
        .json({ message: "Veuillez fournir un message et un auteur" });
    }

    const post = await PostModel.create({
      message: req.body.message,
      author: req.body.author,
    });
    console.log("post créé");
    return res.status(201).json(post);
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    return res
      .status(500)
      .json({ message: "Une erreur est survenue lors de la création du post" });
  }
};

module.exports.editPost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post non trouvé" });
    }

    const updatedPost = await PostModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Echec de la modification" });
  }
};

module.exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await PostModel.deleteOne({ _id: req.params.id });

    if (deletedPost.deletedCount === 0) {
      return res.status(404).json({ message: "Aucun post à supprimer" });
    }

    return res.status(200).json({ message: "Post supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la suppression du post" });
  }
};

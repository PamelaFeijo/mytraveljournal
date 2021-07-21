const Posts = require("../models/post-models");

const getAllPosts = (req, res) => {
  Posts.findPosts((err, results) => {
    if (err) {
      res.status(500).send(`Error retrieving All posts: ${err}`);
    } else {
      res.json(results);
    }
  });
};

const getById = (req, res, next) => {
  if (req.params.id) {
    Posts.getOneById (req.params.id, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  } else {
    Posts.getOneById(req.id, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }
};

const addNewPost = (req, res) => {
  Posts.addNew(req.body, (err, results) => {
    if (err) {
      res.status(501).json({ error: "Error adding a new post" });
    } else {
      res.status(201).send("Post successfully saved");
      res.json(results[0]);
    }
  });
};

const editPost = (req, res) => {
  const { id } = req.params;
  Posts.editPost(id, req.body, (err, results) => {
    if (err) {
      res.status(500).send(`Error editing post: ${err}`);
    } else {
      res.status(204).send("Post successfully updated");
    }
  });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  Posts.deletePost(id, (err, results) => {
    if (err) {
      res.status(500).send(`Error deleting post: ${err}`);
    } else {
      res.status(204).send("Post successfully deleted");
    }
  });
};

module.exports = { getAllPosts, addNewPost, editPost, deletePost, getById };

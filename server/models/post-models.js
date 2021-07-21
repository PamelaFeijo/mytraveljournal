const connection = require("../db/config");

const Posts = {};

Posts.findPosts = (callback) => {
  connection.query("SELECT * FROM blog_posts", (err, results) => {
    callback(err, results);
  });
};

Posts.getOneById = (id, callback) => {
  connection.query(
    "SELECT * FROM blog_posts WHERE id=?",
    [id],
    (err, results) => {
      callback(err, results);
    }
  );
};

Posts.addNew = (req, callback) => {
  const { title, description } = req;
  connection.query(
    "INSERT INTO blog_posts (title, description) VALUES (?, ?)",
    [title, description],
    (err, result) => {
      callback(err, result);
    }
  );
};

Posts.editPost = (id, editedInfo, callback) => {
  connection.query(
    "UPDATE blog_posts SET ? WHERE id=?",
    [editedInfo, id],
    (err, results) => {
      callback(err, results);
    }
  );
};

Posts.deletePost = (id, callback) => {
  connection.query(
    "DELETE FROM blog_posts WHERE id=?",
    [id],
    (err, results) => {
      callback(err, results);
    }
  );
};

module.exports = Posts;

import React from "react";
import { Container, Grid, Card, CardMedia, Button } from "@material-ui/core";
import Axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import useStyles from "./styles/useStyles";
import Modal from "@material-ui/core/Modal";
import AddForm from "./AddForm";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Posts = () => {
  const classes = useStyles();
  const [postList, setPostList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [error, setError] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPosts = () => {
    Axios.get("http://localhost:8001/posts").then((response) => {
      setPostList(response.data);
    });
  };

  const addPost = () => {
    Axios.post("http://localhost:8001/posts", { description, title }).then(
      () => {
        setPostList([...postList, { description, title }]);
      }
    );
  };

  const updatePost = (id, editedInfo) => {
    const finalInfo = { id, ...editedInfo };
    console.log(finalInfo);
    Axios.put(`http://localhost:8001/posts/${id}`, finalInfo).then(
      (response) => {
        setPostList(
          postList.map((val) => {
            return val.id == id
              ? { id: val.id, title: newTitle, description: newDescription }
              : val;
          })
        );
      }
    );
  };

  const deletePost = (id) => {
    Axios.delete(`http://localhost:8001/posts/${id}`).then((response) => {
      setPostList(
        postList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  useEffect(getPosts, []);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {postList.map((card, key) => (
            <Grid key={card.id} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title={postList.title}
                />
                <Post
                  {...card}
                  deletePost={deletePost}
                  handleOpen={handleOpen}
                  updatePost={updatePost}
                  setDescription={setDescription}
                  setTitle={setTitle}
                  handleChange={handleChange}
                  setNewTitle={setNewTitle}
                  setNewDescription={setDescription}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={handleOpen}
            className={classes.addButton}
          >
            Add a post
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <AddForm
              modalStyle={modalStyle}
              addPost={addPost}
              title={title}
              description={description}
              setTitle={setTitle}
              setDescription={setDescription}
            />
          </Modal>
        </Grid>       
      </Grid>
    </div>
  );
};

export default Posts;

import { Container, Grid, Card, CardMedia, Button } from "@material-ui/core";
import Axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import useStyles from "./styles/useStyles";

const Posts = () => {
  const classes = useStyles();
  const [postList, setPostList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
                <Post {...card} deletePost={deletePost} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={addPost}>
            Add a post
          </Button>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default Posts;

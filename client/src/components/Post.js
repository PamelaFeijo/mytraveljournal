import {
  Container,
  Button,
  Typography,
  CardContent,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles/useStyles";

const Post = ({ title, description, id, deletePost }) => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="primary" onClick={() => deletePost(id)}>
            Delete
          </Button>
        </CardActions>
      </Container>
    </div>
  );
};

export default Post;

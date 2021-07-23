import {
  Container,
  Button,
  Typography,
  CardContent,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles/useStyles";
import React from "react";
import Modal from "@material-ui/core/Modal";
import EditForm from "./EditForm";

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

const Post = ({ title, description, id, deletePost, setNewTitle , updatePost, handleEdit, setTitle, setDescription, setNewDescription , handleChange}) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const body = (
    <div style={modalStyle} className={classes.paper} align="center">    
      <EditForm setNewTitle={setNewTitle} updatePost={updatePost} id={id} handleEdit={handleEdit} description={description} title={title} setTitle={setTitle} setNewDescription={setNewDescription} setDescription={setDescription} handleChange={handleChange} />
    </div>
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          {/* <Button size="small" color="primary">
            View
          </Button> */}
          <Button
           variant="outlined"
            size="small"
            color="primary"
            type="button"
            onClick={handleOpen}
          >
            Edit
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>   
          <Button size="small" variant="outlined" color="primary" onClick={() => deletePost(id)}>
            Delete
          </Button>
        </CardActions>
      </Container>
    </div>
  );
};

export default Post;

import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles/useStyles";

const EditForm = ({  
  updatePost,
  id,
  description,
  title
}) => {
  const classes = useStyles();
  const [editInfo, setEditInfo] = useState({
    title: title,
    description: description,
  });

  const handleInput = (e) => {
    setEditInfo({ ...editInfo, [e.target.name]: e.target.value });
  };
  return (
    <div align="center">
      <h1>Edit Post</h1>
      <div>
        <div>
          <TextField
            id="outlined-textarea"
            label="Post Title"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            onChange={handleInput}
            value={editInfo.title}
            name="title"
            className={classes.titleInput}
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={8}
            className={classes.descriptionInput}
            variant="outlined"
            onChange={handleInput}
            value={editInfo.description}
            name="description"
          />
          <p id="simple-modal-description">
            This must be an adorable memory.
            <br />
            Click add to save it to your journey album!
          </p>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => updatePost(id, editInfo)}
          className={classes.addButton}
        >
          Save post
        </Button>
      </div>
    </div>
  );
};

export default EditForm;
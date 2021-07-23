import React from "react";
import useStyles from "./styles/useStyles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const AddForm = ({
  modalStyle,
  addPost,
  setDescription,
  setTitle,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  return (
    <div>
      <div style={modalStyle} className={classes.paper} align="center">
        <h2 id="simple-modal-title">Add a new Post</h2>
        <div>
          <TextField
            id="outlined-textarea"
            label="Title"
            //placeholder="Placeholder"
            multiline
            variant="outlined"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={value.title}
            name="title"
            className={classes.titleInput}
          />
        </div>      
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={8}
            className={classes.descriptionInput}
            variant="outlined"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={value.description}
            name="description"
          />
        </div>
        <p id="simple-modal-description">
          This must be an adorable memory. 
          <br/>
           Click add to save it to your journey album!
        </p>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={addPost}
            className={classes.addButton}
          >
            Add a post
          </Button>
        </div>      
      </div>
    </div>
  );
};

export default AddForm;

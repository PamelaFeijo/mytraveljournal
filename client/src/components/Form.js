import React from "react";
import useStyles from "./styles/useStyles";
import Post from "./Post";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const Form = ({
  modalStyle,
  addPost, 
  setDescription,
  setTitle,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  return (
    <div>
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <div>
          <TextField
            id="outlined-textarea"
            label="Post Title"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={value.title}
            name="title"
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}            
            variant="outlined"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={value.description}
            name="description"
          />
        </div>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <Post />
        <Button variant="contained" color="primary" onClick={addPost}>
          Add a post
        </Button>
      </div>
    </div>
  );
};

export default Form;

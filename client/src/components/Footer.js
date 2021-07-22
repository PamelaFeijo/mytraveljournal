import { Link, Typography } from "@material-ui/core";
import useStyles from "./styles/useStyles";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Pamela Feijo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          My Trips Blog
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          Contact: pamelaffeijo@gmail.com <br />
          Github: https://github.com/PamelaFeijo
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
};

export default Footer;

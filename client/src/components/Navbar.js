import { AppBar, Toolbar, Typography } from "@material-ui/core";

import CameraIcon from '@material-ui/icons/PhotoCamera';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },    
  }));


const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Trips Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
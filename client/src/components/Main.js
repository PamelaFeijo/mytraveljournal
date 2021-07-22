import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles/useStyles";
import Typed from "react-typed";

const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <div className={classes.typography}>            
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color='initial'
              gutterBottom
              className={classes.typography}
            >
             Register your best <br/>
             <Typed
                strings={[
                    'trips',
                    'memories',
                    'experiences']}
                    typeSpeed={40}
                    backSpeed={60}                    
                    loop >                    
                </Typed>  
            </Typography>          
          </div>  
        </Container>
      </div>
    </div>
  );
};

export default Main;

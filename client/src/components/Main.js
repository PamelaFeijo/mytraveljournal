import { Container, Grid, Button, Typography } from "@material-ui/core";
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
           {/*  <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              className={classes.spacingTypography}
            >
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so
              folks don&apos;t simply skip over it entirely.
            </Typography> */}
          </div>  
        </Container>
      </div>
    </div>
  );
};

export default Main;

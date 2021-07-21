import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardContent: {
        flexGrow: 1,
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      }, 
}));

const Post = ({ title, description }) => {
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
          <Button size="small" color="primary">
            Delete
          </Button>
        </CardActions>

     {/*    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {postList}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={posts}>
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="primary">
                      Delete
                    </Button>
                  </CardActions> */}

        {/*   <Grid container spacing={4}>
           {postList.map((card) => (
             <Grid item key={card} xs={12} sm={6} md={4}>
               <Card className={classes.card}>
                 <CardMedia
                   className={classes.cardMedia}
                   image="https://source.unsplash.com/random"
                   title={postList}
                 />
                 <CardContent className={classes.cardContent}>
                   <Typography gutterBottom variant="h5" component="h2">
                    {postList}
                   </Typography>
                   <Typography>
                     This is a media card. You can use this section to describe the content.
                   </Typography>
                 </CardContent>
                 <CardActions>
                   <Button size="small" color="primary" onClick={posts}>
                     View
                   </Button>
                   <Button size="small" color="primary">
                     Edit
                   </Button>
                   <Button size="small" color="primary">
                     Delete
                   </Button>
                 </CardActions>
               </Card>
             </Grid>
           ))}
             <Button size="small" color="primary" onClick={posts}>
                     View
             </Button>
         </Grid> */}
      </Container>
    </div>
  );
};

export default Post;

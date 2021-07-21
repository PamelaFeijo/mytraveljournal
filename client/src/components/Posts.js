import { Container, Grid, Button, Typography, Card, CardMedia, CardContent, CardActions } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post"

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },  
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      }, 
}));



//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Posts = () => {
const [postList, setPostList] = useState([]);

const posts = () => {
    Axios.get('http://localhost:8001/posts')
    .then((response) => {
      setPostList(response.data);
    })
 }

 useEffect(posts, []);

//  useEffect(posts, [])

  const classes = useStyles();

  return (
    <div>
      {/*   {postList.map((user) => (
        <Post key={postList.title} {...user} />
      ))}    */}

     {/*   <Container className={classes.cardGrid} maxWidth="md"> 
         <Grid container spacing={4}> 
         {postList.map((user) => (
             <Grid item key={postList.title}  xs={12} sm={6} md={4}>
                  <Card className={classes.card}></Card>
              <Post  {...user} />
              <Card/>
            </Grid>
      ))} 
         </Grid>
       </Container>  */} 
   

      <Container className={classes.cardGrid} maxWidth="md">
         
          <Grid container spacing={4}>
            {postList.map((card) => (
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={postList.title}
                  />
                  <Post  key={card.title} {...card} />
                </Card>
              </Grid>
            ))}
            {/*   <Button size="small" color="primary" onClick={posts}>
                      View
              </Button> */}
          </Grid>
        </Container> 
    </div>
  );
};

export default Posts;
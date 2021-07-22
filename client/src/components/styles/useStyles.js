import { makeStyles } from "@material-ui/core/styles";
import picture from "../../assets/landscape.jpg"

const useStyles = makeStyles((theme) => ({ 
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  spacingTypography: {
    paddingBottom : "20%",
  },
  addButton: {
    marginTop: "5%",
    width: "200px",
  },
  titleInput: {
    marginBottom: "5%",
    width: "400px",
  },
  descriptionInput: {
    width: "400px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  heroContent: {    
    backgroundImage: `url(${picture})`,   
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "600px",
    backgroundSize: "cover",     
  },
  typography: {
    paddingTop: "20%",
    color: "white !important",
    fontWeight:"600 !important",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    width: 600,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  footer: {
    backgroundColor: "#400CCC",
    padding: theme.spacing(6),
    marginTop: "100px",
    color: "white"
},    
}));

export default useStyles;

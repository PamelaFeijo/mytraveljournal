import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../components/firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to your travel blog</h2>
        <p>Log in to register your trips</p>
        <div className="login-button google"
           onClick={() =>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
            <GoogleOutlined /> Sign In with Google
        </div>       
      </div>
    </div>
  );
};

export default Login;

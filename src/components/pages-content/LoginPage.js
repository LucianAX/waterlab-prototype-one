import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Constants from '../../app.json';


// import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = React.useState({});

//   LOGIC CODE GOES HERE !!
function onLoginPress(){
  var details = {
    'grant_type': 'password',
    'username': username,
    'password': password,
    'scope': 'openid api',
    'client_id': '271147551375-o6jmu3ospb1atqqpjtoopgkfj1ln3cpa.apps.googleusercontent.com',
    'client_secret': 'A60LvugvQo_gsEABUl3CPw8r'
  }

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch(Constants.apiURL + 'connect/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    body: formBody
  })
      .then(response => {
          console.log(response);
          response.json();
      })
  .then(json => {

    if(json.error == 'invalid_grant') {
      setError(json)
      setPassword('')
    } else {
      //console.log(json);
      props.setToken(json);
    }
  })
  .catch((error) => {
    console.log(error);
  });


}


  return (<>
    {/* <!-- Page Heading --> */}


    <div class="form">
      <div class="form-toggle"></div>

      <div class="form-panel one">
        <div class="form-header">
          <img src="../../../public/SB-Admin/img/logo.png" alt="logo" />
        </div>

        <div class="form-content">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required="required"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required="required"/>
            </div>
            <div class="form-group">
              <label class="form-remember">
                <input type="checkbox"/>Remember Me
              </label><a class="form-recovery" href="#">Forgot Password?</a>
            </div>
            <div class="form-group">
              <button type="submit" onClick={() =>this.onLoginPress()}>
              Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="form-panel two">
        <div class="form-header">
          <h1>Register Account</h1>
        </div>

        <div class="form-content">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required="required"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required="required"/>
            </div>
            <div class="form-group">
              <label for="cpassword">Confirm Password</label>
              <input type="password" id="cpassword" name="cpassword" required="required"/>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required="required"/>
            </div>
            <div class="form-group">
              <button type="submit">
                <Link to="/overview" style={{ color: "white" }}>Register</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>)
};

export default LoginPage;

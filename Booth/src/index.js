import { CognitoIdentityProviderClient, InitiateAuthCommand, SignUpCommand, ForgotPasswordCommand, ConfirmForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider";

//User Login
async function authenticateUser(username, password) {
  const client = new CognitoIdentityProviderClient({ region: "us-west-1" });
  const command = new InitiateAuthCommand(
    {
      AuthFlow: "USER_PASSWORD_AUTH",
      AuthParameters: {
          USERNAME: username,
          PASSWORD: password
      },
      ClientId: "5mf6bbtjmgbtloo8hldkt89roj"
    }
  );

  try {
    const response = await client.send(command);
    const TokenId = response.AuthenticationResult.IdToken;
    return TokenId;
  } catch(error) {
    alert("Error: " + error.message)
  }
}

//User Signup
async function signUpUser(name, username, password) {
  const client = new CognitoIdentityProviderClient({ region: "us-west-1" });
  const command = new SignUpCommand(
    {
      ClientId: "5mf6bbtjmgbtloo8hldkt89roj",
      Username: username,
      Password: password,
      UserAttributes: [
        {
          Name: "name",
          Value: name
        }
      ]
    }
  );

  try {
    const response = await client.send(command);
    return response;
  } catch(error) {
    alert("Error: " + error.message)
  }
}

//User Forgot Password Requesting Reset
async function forgotPassUser(username) {
  const client = new CognitoIdentityProviderClient({ region: "us-west-1" });
  const command = new ForgotPasswordCommand(
    {
      ClientId: "5mf6bbtjmgbtloo8hldkt89roj",
      Username: username
    }
  );

  try {
    const response = await client.send(command);
    console.log(response);
    return response;
  } catch(error) {
    alert("Error: " + error.message)
  }
}

//User Resetting Password with code
async function resetPassUser(username, password, code) {
  const client = new CognitoIdentityProviderClient({ region: "us-west-1" });
  const command = new ConfirmForgotPasswordCommand(
    {
      ClientId: "5mf6bbtjmgbtloo8hldkt89roj",
      Username: username,
      Password: password,
      ConfirmationCode: code
    }
  );

  try {
    const response = await client.send(command);
    console.log(response);
    return response;
  } catch(error) {
    alert("Error: " + error.message)
  }
}

//Listener for login form
if (document.getElementById("login-form") != null) {
  const loginform = document.getElementById("login-form");
  loginform.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const tokenId = await authenticateUser(username, password);

    if (tokenId != undefined) {
      location.assign("dashboard.html");
    }
  });
}

//Listener for signup form
if (document.getElementById("signup-form") != null) {
  const signupform = document.getElementById("signup-form");
  signupform.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const results = await signUpUser(name, username, password);

    if (results != undefined) {
      location.assign("login.html");
    }
  });
}

//Listener for forgot password form
if (document.getElementById("forgot-form") != null) {
  const forgotform = document.getElementById("forgot-form");
  forgotform.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;

    const results = await forgotPassUser(username);

    if (results != undefined) {
      location.assign("reset.html");
    }
  });
}

//Listener for password reset form
if (document.getElementById("reset-form") != null) {
  const forgotform = document.getElementById("reset-form");
  forgotform.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const code = document.getElementById("code").value;

    const results = await resetPassUser(username, password, code);

    if (results != undefined) {
      location.assign("login.html");
    }
  });
}
import auth0 from "auth0-js";

const webAuth = new auth0.WebAuth({
  domain: "clai011.auth0.com",
  clientID: "RHI76KRMrt9X1y1lnBDpizL7wD7kZ31I",
  redirectUri: "http://localhost:8080/callback",
  responseType: "token id_token",
  scope: "openid"
});

let tokens = {};

const login = () => {
  webAuth.authorize();
};

const isLoggedIn = () => {
  return tokens.accessToken && new Date().getTime() < tokens.expiry;
};

// cb: callback as argument

const logout = () => {
  tokens = {};
};

const handleAuth = cb => {
  webAuth.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      tokens.accessToken = authResult.accessToken;
      tokens.idToken = authResult.idToken;
      tokens.expiry = new Date().getTime() + authResult.expiresIn * 1000;
      cb();
    } else {
      console.log(err);
    }
  });
};

export { login, logout, handleAuth, isLoggedIn };

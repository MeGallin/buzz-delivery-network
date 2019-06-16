interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  googleAPIKey: string;
}

export const AUTH_CONFIG_PROD: AuthConfig = {
  clientID: "9vQsIlYi3wnyzi3NYdaWboFjWtbmaEhZ",
  domain: "dev-c-3865r5.eu.auth0.com",
  callbackURL: "http://dev.buzzdeliverynetwork.co.za/#/callback",
  googleAPIKey: "AIzaSyC1lMvYDiFiKeHfaE14ApWj-M4ilf5qaPo"
};

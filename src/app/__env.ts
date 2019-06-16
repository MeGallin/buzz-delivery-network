interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: "9vQsIlYi3wnyzi3NYdaWboFjWtbmaEhZ",
  domain: "dev-c-3865r5.eu.auth0.com",
  callbackURL: "http://localhost:4200/callback"
};

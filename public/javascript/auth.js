//Initialize SDK for Auth0
let auth0 = null;

//fetch auth_config.json

const fetchAuthConfig = () => fetch("/auth_config.json");

// this will use fetchAuthConfig to download the configuration file
// initialize the auth0 variable

const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();
  
    auth0 = await createAuth0Client({
      domain: config.domain,
      client_id: config.clientId
    });
  };

  //initialize app for Auth0
window.onload = async () => {
    await configureClient();
  }

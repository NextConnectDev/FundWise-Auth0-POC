This repo contains an example to connect an external website to the ImpactID FundWise API. Authentication is done through Auth0. When a user is logged in, requests can be made to the FundWise API on behalf of this user. 

Every API request is channeled through a proxy, defined in `/api/[[...args]]`. Every endpoint of the FundWise API specified in the API docs is available through this proxy. 

To forward the user session from your website through the proxy to the FundWise server, you have to retrieve an access token from Auth0 and set it as a bearer token in the Authorization header. Set your FundWise organization ID in the `x-organization-id` header.

To try this POC, install this repo locally and set the following environment variables:

| Environment variablen | Description                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| APP_BASE_URL          | The base URL of your website, starting with https://, without trailing slash                                  |
| FUNDWISE_BASE_URL     | The base URL of FundWise, e.g. https://data.connectid.nl                                                      |
| ORGANIZATION_ID       | Your FundWise Organization ID, found in the FundWise backoffice                                               |
| AUTH0_SECRET          | A secret key used by Auth0 to encrypt/decrypt token, can be generated with `openssl rand -hex 32` for example |
| AUTH0_DOMAIN          | The base domain of Auth0                                                                                      |
| AUTH0_CLIENT_ID       | The client ID of the Auth0 application, found in the FundWise backoffice                                      |
| AUTH0_CLIENT_SECRET   | The client secret of the Auth0 application, found in the FundWise backoffice                                  |
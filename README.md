
Ensure you have the following installed:


Node.js (v16 or higher recommended)

npm or yarn

Auth0 account for authentication setup

Installation
Clone the Repository:


git clone https://github.com/AmruthaKothuri/oidc-authentication-app
cd oidc-authentication-app
Install Dependencies:


npm install
Or if you're using Yarn:


yarn install
Setting Up Auth0
Log in to your Auth0 Dashboard.

Create a new application:

Application type: Single Page Application
Add your local development URL (http://localhost:3000) to:
Allowed Callback URLs
Allowed Logout URLs
Allowed Web Origins
Configure Social Logins (Microsoft and GitHub):

Navigate to Connections → Social.
Enable and configure Microsoft and GitHub with the required credentials.
Update the .env file: Create a .env file in the root directory and add the following environment variables:


REACT_APP_AUTH0_DOMAIN=your-auth0-domain

REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id


Replace your-auth0-domain, your-auth0-client-id, and your-api-audience with values from your Auth0 application.

Running the Project
Start the development server:


npm start
Or if you're using Yarn:


yarn start
Open your browser and navigate to:


http://localhost:3000

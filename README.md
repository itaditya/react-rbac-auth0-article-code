# React RBAC tutorial

## Requirements
* Node + npm
* [Auth0 account](https://auth0.com/) with [application](https://manage.auth0.com/#/applications)

## Install

Clone this repository, then run:

```
$ npm install
```

## Setup

### Sign Up for Auth0

You'll need an [Auth0](https://auth0.com) account to manage authentication. You can [sign up for a free Auth0 account here](https://auth0.com/signup).

Next, set up an Auth0 Application so Auth0 can interface with the React app.

### Set Up an Auth0 Application

1. Go to your [**Auth0 Dashboard**](https://manage.auth0.com/#/) and click the "[Create a New Application](https://manage.auth0.com/#/applications/create)" button.
2. Name your new app (something like `React RBAC`) and select "Single Page Web Applications".
3. In the **Settings** for your new Auth0 application app, add `http://localhost:3000/callback` to the **Allowed Callback URLs**.
5. At the bottom of the **Settings** section, click "Show Advanced Settings". Choose the **OAuth** tab and verify that the **JsonWebToken Signature Algorithm** is set to "RS256".

## Development server

```
$ npm start
```

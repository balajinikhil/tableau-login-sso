// server.ts - server side code for generating JWT token
// Example is using Serverless function on Vercel, but can be any place where you can host a Node.js server
// Vercel Docs: https://vercel.com/docs/concepts/functions/serverless-functions
// Serverless Docs: https://serverless.com/framework/docs/providers/aws/guide/serverless-functions/
// Note: Remove the types to convert to plain JavaScript
  


// npm or yarn install jsonwebtoken
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const jwtExpirySeconds = 600;



  const payload = {
    jti: randomBytes(64).toString("hex"),
    iss: "Unique issuer URI that identifies the trusted connect app and its signing key",
    aud: "tableau",
    sub: "user@email",
    scp: ["tableau:views:embed"],
  };

  //   Create a new token with the username in the payload
const token = jwt.sign(payload, "tokenSecret", {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
    header: {
      kid: "The connected app's secret key identifier.",
      iss: "Unique issuer URI that identifies the trusted connect app and its signing key",
    },
  });
 console.log(token);
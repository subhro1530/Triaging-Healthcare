import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import { NextApiRequest, NextApiResponse } from "next";

const clientId =
  "665998470418-br2s0gqk82a28c8pqerh0k4tirs92c17.apps.googleusercontent.com";
const clientSecret = "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";
const redirectUrl = "http://localhost:3000/api/auth/google/callback";

const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUrl);

export default async (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],    
  });

  res.writeHead(302, { Location: authUrl });
  res.end();
};

export const callbackHandler = async (req, res) => {
  const code = req.query.code;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    const accessToken = tokens.access_token;

    // Save the access token securely (e.g., in session/cookie) for future API requests
    // For example:
    // req.session.accessToken = accessToken;

    // Redirect user to dashboard or any authenticated page
    res.writeHead(302, { Location: "/dashboard" });
    res.end();
  } catch (error) {
    console.error("Error fetching access token:", error);
    res.status(500).json({ error: "Failed to fetch access token" });
  }
};

// Exporting the handler for Next.js API routing
export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle the redirect URL
  },
};
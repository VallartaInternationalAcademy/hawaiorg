import { useState, useEffect } from "react";
import axios from "axios";

const useOAuthBlackbaud = (clientId: string, clientSecret: string) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAccessToken = async () => {
      const tokenEndpoint = "/token";
      const authString = btoa(`${clientId}:${clientSecret}`);
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authString}`,
      };
      const body = "grant_type=client_credentials";

      try {
        const response = await axios.post(tokenEndpoint, body, { headers });
        setAccessToken(response.data.access_token);
        setLoading(false);
      } catch (err) {
        setError("Failed to retrieve access token");
        setLoading(false);
      }
    };

    getAccessToken();
  }, [clientId, clientSecret]);

  return { accessToken, loading, error };
};

export default useOAuthBlackbaud;

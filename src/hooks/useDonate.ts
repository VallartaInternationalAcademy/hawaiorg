import { useState } from "react";
import axios from "axios";

const usePayment = () => {
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const getAccessToken = async (authorizationCode: any) => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://oauth2.sky.blackbaud.com/token",
        {
          grant_type: "authorization_code",
          code: authorizationCode,
          redirect_uri: "https://corazonhawaii.org/",
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
        }
      );

      setAccessToken(response.data.access_token);
      setLoading(false);
    } catch (err) {
      setError("Error getting access token");
      setLoading(false);
    }
  };

  // Función para enviar el pago/donación
  const makePayment = async (donationData: any) => {
    if (!accessToken) {
      setError("Access token is missing");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.sky.blackbaud.com/constituent/v1/donations",
        donationData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError("Error processing donation");
      setLoading(false);
    }
  };
  return { getAccessToken, makePayment, loading, error, success };
};

export default usePayment;

import { useState } from "react";
import axios from "axios";

const useSendEmail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const sendEmail = async (from: string, message: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        "https://api.mailgun.net/v3/YOUR_DOMAIN_NAME/messages",
        new URLSearchParams({
          from,
          to: "angel@dsmconsulting.mx",
          subject: "CORAZON HAWAII - Contacto",
          text: message,
        }),
        {
          headers: {
            Authorization: `Basic ${btoa(
              `api:47e862153da66e71d7895e12d15e5303-911539ec-352407e9`
            )}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        setSuccess(true);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      setError("Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return {
    sendEmail,
    loading,
    error,
    success,
  };
};

export default useSendEmail;

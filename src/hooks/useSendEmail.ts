import { useState } from "react";
import axios from "axios";

const useSendMail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendMail = async ({
    subject,
    text,
  }: {
    subject: string;
    text: string;
  }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        "https://emailsender-via.up.railway.app/api/mail/send",
        {
          to: "angel@dsmconsulting.mx", // Email fijo
          subject,
          text,
        }
      );

      setSuccess(true);
      return response.data;
    } catch (err) {
      setError(
        (err as any).response
          ? (err as any).response.data
          : "Error sending email"
      );
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { sendMail, loading, error, success };
};

export default useSendMail;

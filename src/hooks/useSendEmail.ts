import { useState } from "react";
import emailjs from "emailjs-com";

interface UseEmailResult {
  sendEmail: (toEmail: string, message: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const useEmail = (): UseEmailResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (toEmail: string, message: string) => {
    setLoading(true);
    setError(null);

    const templateParams = {
      to_email: toEmail,
      message: message,
    };

    try {
      await emailjs.send(
        "service_vk9y9hh", // reemplaza con tu service_id
        "template_9ztg2gk", // reemplaza con tu template_id
        templateParams,
        "Vh6ITFRS82UfLXqtx" // reemplaza con tu user_id
      );
      setLoading(false);
    } catch (err) {
      setError("Failed to send email");
      setLoading(false);
    }
  };

  return {
    sendEmail,
    loading,
    error,
  };
};

export default useEmail;

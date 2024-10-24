import React from "react";
import useOAuthBlackbaud from "../hooks/useOAuthBlackbaud";

const DonatePage = () => {
  const clientId = "3c3008aa-9bf2-4d57-bed3-aa0b99fb1be7";
  const clientSecret = "f1Rf1j1AcDRJv2QpijHwpk927Z8EnvwWBjT3qmeSUOY=";

  const { accessToken, loading, error } = useOAuthBlackbaud(
    clientId,
    clientSecret
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Blackbaud OAuth Test</h1>
      <p>Access Token: {accessToken}</p>
    </div>
  );
};

export default DonatePage;

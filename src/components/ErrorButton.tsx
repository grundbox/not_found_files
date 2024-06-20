"use client";

import { useState } from "react";

const ErrorButton = ({
  errorMessage = "An unexpected error occurred during the process",
}: {
  errorMessage?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error(errorMessage);
  }

  return (
    <button onClick={() => setError(true)}>Throw error</button>
  );
};

export default ErrorButton;

"use client";

import { useState } from "react";

const ReloadButton = () => {
  return (
    <button onClick={() => window.location.reload()}>Reload the page</button>
  );
};

export default ReloadButton;

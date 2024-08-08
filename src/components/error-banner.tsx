'use client';

import React, { useState, useEffect } from 'react';

function ErrorBanner() {
  const [throwError, setThrowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setThrowError(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (throwError) {
    throw new Error('This is a test error to check error handling.');
  }

  return <p>error will throw in 2 seconds</p>;
}

export default ErrorBanner;

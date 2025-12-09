import { useState, useCallback, useEffect } from "react";

async function sendHttpRequest(url, config) {
  console.log("url", url);
  console.log("config", config);

  const response = await fetch(url, config);
  console.log("response", response);
  console.log("response status", response.status);

  // Check if response is ok first
  if (!response.ok) {
    // Try to parse error message if available
    let errorMessage = "Something went wrong";
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch (e) {
      // If parsing fails, use default message
    }
    throw new Error(errorMessage);
  }

  const resData = await response.json();
  return resData;
}
const useHttp = (url, config, initialData) => {
  const [data, setResData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest(bodyData) {
      console.log("sending data", bodyData);
      setIsLoading(true);
      try {
        const requestConfig = bodyData
          ? { ...config, body: JSON.stringify(bodyData) }
          : config;
        const response = await sendHttpRequest(url, requestConfig);
        setResData(response);
      } catch (error) {
        setError(error.message || "Fatal error, something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;

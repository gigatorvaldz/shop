import React from "react";

interface ErrorPropsI {
  error?: string;
}

const ErrorPage = ({ error }: ErrorPropsI) => {
  return <div>{error ? <p>{error}</p> : <p>Unknown error</p>}</div>;
};

export default ErrorPage;

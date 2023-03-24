import React from "react";

// [Note]: error type upd
// export type errorT<string> = {
// };

interface ErrorPropsI {
  // [fix]: fix error Type
  error?: string;
}

const ErrorPage = ({ error }: ErrorPropsI) => {
  return <div>{error ? <p>{error}</p> : <p>Unknown error</p>}</div>;
};

export default ErrorPage;

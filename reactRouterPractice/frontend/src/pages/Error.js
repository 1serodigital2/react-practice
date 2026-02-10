import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <PageContent title={error.status}>
      <h2>{error.statusText}</h2>
      <p>{error.data}</p>
    </PageContent>
  );
};
export default ErrorPage;

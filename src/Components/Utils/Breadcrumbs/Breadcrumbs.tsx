import React from "react";
import { useLocation, Link } from "react-router-dom";
type Props = {};

function Breadcrumbs({}: Props) {
  const location = useLocation();
  let currentLink: Array<string> = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink.join("")}>{crumb}</Link>
        </div>
      );
    });

  return <div>{crumbs}</div>;
}

export default Breadcrumbs;

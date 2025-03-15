import React from "react";
import { resources } from "../resources";
import PageTitle from "./PageTitle";

function Resources({ category }) {
  const filterResource = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <article>
    
      <PageTitle category={category} />
      <ul>
        {filterResource.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Resources;

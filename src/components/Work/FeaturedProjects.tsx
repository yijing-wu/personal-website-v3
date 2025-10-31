import React from "react";

import { FeaturedProjectsData } from "../../assets/projectsData";
import FeaturedProjectWidget from "./FeaturedProjectWidget";

export default function FeaturedProjects() {
  return (
    <div>
      {FeaturedProjectsData.map((featuredProject, index) => {
        return (
          <FeaturedProjectWidget
            key={index}
            index={index}
            picture={featuredProject.picture}
            title={featuredProject.title}
            abbreviation={featuredProject.abbreviation}
            description={featuredProject.description}
            tools={featuredProject.tools}
            mainLink={featuredProject.mainLink}
            isMainLinkExternal={featuredProject.isMainLinkExternal}
            githubLink={featuredProject.githubLink}
          />
        );
      })}
    </div>
  );
}

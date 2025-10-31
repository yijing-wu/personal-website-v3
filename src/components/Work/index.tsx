import React from "react";

import { Title } from "../../MyLibrary";
import FeaturedProjects from "./FeaturedProjects";
import OtherProjects from "./OtherProjects";

function Work() {
  return (
    <div
      id="work"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <Title
        index={3}
        content={"Some Things I’ve Built"}
        style={{ marginBottom: 40 }}
      />
      <FeaturedProjects />
      <OtherProjects />
    </div>
  );
}

export default Work;

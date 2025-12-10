import { useEffect, useState } from "react";
import { ProjData as projectdata } from "../../constants/ProjData";

import Link from "next/link";

function Projects() {
  const activeItems = projectdata.filter((item) => item.Status === "active");
  const inactiveItems = projectdata.filter(
    (item) => item.Status === "Inactive"
  );
  const supplyItems = projectdata.filter((item) => item.supply === "1");
  const [aProjects, setAProjects] = useState(activeItems);
  const [iProjects, setIProjects] = useState(inactiveItems);
  const [sProjects, setSProjects] = useState(supplyItems);

  return (
    <div className="projectsContainer">
      <div>
        <p className="projectP">پروژه های فعال:</p>
        {aProjects.map((aproj) => (
          <div key={aproj.id} className="divLink">
            <p>◾</p>
            <Link
              href={{
                pathname: `/projects/${aproj.id}`,
              }}
              className="projectLink"
            >
              {/* {aproj.id} */}
              {aproj.name}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <p className="projectP">پروژه های خاتمه یافته:</p>
        {iProjects.map((iproj) => (
          <div key={iproj.id} className="divLink">
            <p>◾</p>
            <Link
              href={{
                pathname: `/projects/${iproj.id}`,
              }}
              className="projectLink"
            >
              {iproj.name}
            </Link>
          </div>
          
        ))}
      </div>
       <div>
        <p className="projectP">تامین تجهیزات شرکت مهندسی دزون ازسازندگان خارجی:</p>
        {sProjects.map((sproj) => (
          <div key={sproj.id} className="divLink">
            <p>◾</p>
            <Link
              href={{
                pathname: `/supplier/${sproj.id}`,
              }}
              className="projectLink"
            >
              {sproj.name}
            </Link>
          </div>
         
        ))}
      </div>
    </div>
  );
}

export default Projects;

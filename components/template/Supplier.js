import Link from "next/link"
import { useState } from "react";

import { ProjData as projectdata } from "../../constants/ProjData";

function Supplier() {
const supplyItems = projectdata.filter((item) => item.supply === "1");
const [sProjects, setSProjects] = useState(supplyItems);

  return (

    <div>
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
  )
}

export default Supplier
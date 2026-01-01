import { useRouter } from "next/router";
import { ProjSupp as projectSupp } from "../../constants/ProjSupply";
import { useState } from "react";
function Index({ projS, oneProj }) {
  const [project, setProject] = useState(projS);
  const [onePr, setOnePr] = useState(oneProj);
  return (
    <div className="right-section">
      <div className="projectAlign">
        <div className="profile-data">
          <div>
            <h3>پروژه :</h3>
            <p>{onePr.name}</p>
          </div>
          <div>
            <h3>کارفرما : </h3>
            <p>{onePr.employer}</p>
          </div>
          <div>
            <h3>مشاور :</h3>
            <p>{onePr.consultant}</p>
          </div>
        </div>
      </div>
      <div className="centerItems">
        <table>
          <thead>
            <tr>
              <th>نوع تجهیزات</th>
              <th>شرکت</th>
            </tr>
          </thead>

          <tbody>
            {projS.map((proS) => (
              <tr key={proS.id}>
                <td> {proS.materiel}</td>
                <td className="tdLeft">{proS.compan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
export async function getServerSideProps(context) {
  const { id } = context.params;

  // گرفتن محصول از API
  // const res = await fetch(`https://yourapi.com/products/${id}`);
  // const product = await res.json();
  const projS = projectSupp.filter((proj) => proj.idProj === id);
  const oneProj = projectSupp.find((pdata) => pdata.idProj === id);

  return {
    props: { projS, oneProj },
  };
}

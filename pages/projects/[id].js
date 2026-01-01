import { useRouter } from "next/router";
import { ProjData as projectdata } from "../../constants/ProjData";
import { PictureData as pictures } from "../../constants/PicData";
import { ProcessStepData as ProcessData } from "../../constants/ProcessStepData";
import { useEffect, useState } from "react";
function Index({ servProject, picproj, processproj }) {
  const [project, setProject] = useState(servProject);
  const [pic, setPic] = useState(picproj);
  const [processStep, setProcessStep] = useState(processproj);
  return (
    <div className="projectAlign">
      <div className="profile-data">
        <div>
          <h3>پروژه :</h3>
          <p>{project?.name}</p>
        </div>
        <div>
          <h3>کارفرما : </h3>
          <p>{project?.employer}</p>
        </div>
        <div>
          <h3>مشاور :</h3>
          <p>{project?.consultant}</p>
        </div>
        <div>
          <h3>پیمانکار :</h3>
          <p>{project?.contractor}</p>
        </div>
        <div>
          <h3>نوع پیمان :</h3>
          <p>{project?.typeOfContract}</p>
        </div>
        <div>
          <h3>ظرفیت :</h3>
          <p>{project?.capacity}</p>
          <a> متر مکعب در روز </a>
        </div>
        <div>
          <h3>موقعیت :</h3>
          <p>{project?.location}</p>
        </div>
        <div>
          <h3>فرآیند :</h3>
          <p>{project?.process}</p>
        </div>
        <div>
          <h3>وضعیت :</h3>
          {project?.Status === "active" ? <p>فعال</p> : <p>خاتمه یافته</p>}
        </div>
        <div className="processStep">
          <h3>مراحل فرایند :</h3>
          <div className="flex-container">
            {processStep.map((procS) => (
              <div key={procS.id} >
                <p style={{ fontWeight: "bold", paddingLeft: "5px" }}> - </p>
                <p>{procS?.processStep}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pictureProj">
        {pic.map((pict) => (
          <div key={pict.id}>
            <img src={pict.pic} alt="image" />
          </div>
        ))}
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
  const servProject = projectdata.find((pdata) => pdata.id === id);
  const picproj = pictures.filter((pic) => pic.idProj === id);
  const processproj = ProcessData.filter((proc) => proc.idProj === id);

  return {
    props: { servProject, picproj, processproj },
  };
}

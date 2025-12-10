import styles from "./ProjectsSlider.module.css";
import { ProjData as projectdata } from "../../constants/ProjData";

function ShowPicturs(id, idProj, pic, i, fadeInIndex, fadeOutIndex) {
    console.log("id::",id,"idProj::",idProj,"pic::",pic)
  const proj = projectdata.find((pdata) => pdata.id === idProj);
console.log("picProject",proj)
  return (
    <>
     {/* {proj?( */}
         <div
        className={`${styles.item}
      ${fadeOutIndex === i ? styles.fadeOut : ""}
      ${fadeInIndex === i ? styles.fadeIn : ""}
      `}
      >
        {/* <img src={pic} alt="Pic" /> */}
        {proj &&(

            <p>{proj.name}</p>
        )}
      </div>
     {/* ):null} */}
    </>
  );
}

export default ShowPicturs;

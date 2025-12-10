import Image from "next/image";
import ProjectsSlider from "../elements/ProjectsSlider";
import { useRouter } from "next/router";

function MiddlePart2() {
  const router = useRouter();
  const mapClick = () => {
    router.push("./projects");
  };
  return (
    // <div className="alignBack">
    //   <div className="ProjectImage">
    //     <h3>پروژه های دزون در سراسر ایران</h3>
    //     <Image src="/images/map.jpg" alt="Logo" width={250} height={200} />
    //   </div>
    //   <div style={{ width: "100%", overflow: "hidden" }}>
    //     <ProjectsSlider />
    //   </div>
    // </div>

    <div className="alignBack">
      <div className="ProjectImage">
        <h3> پروژه های دزون در سراسرایران</h3>
        <Image src="/images/map.jpg" alt="Logo" width={250} height={200}  onClick={mapClick} />
      </div>

      
      <div className="sliderWrapper">
        <ProjectsSlider />
      </div>
    </div>
  );
}

export default MiddlePart2;

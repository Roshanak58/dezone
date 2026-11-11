

import AboutInfoEn from "@/components/template/en/AboutInfoEn";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const name = router.query.name;
  return (
    // <div className="infoBack">
      <AboutInfoEn type={name} />
    // </div>
  );
}

export default Index;

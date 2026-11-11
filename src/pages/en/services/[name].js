

import ServiceInfo from "@/components/template/en/ServiceInfo";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
    const type = router.query.name;
  return (
    <div>
      
      <ServiceInfo type={type} />
    </div>
  );
}
export default Index;

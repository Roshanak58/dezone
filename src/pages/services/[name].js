import ServiceInfo from "@/components/template/ServiceInfo";
import mammoth from "mammoth";
import fs from "fs";
import path from "path";
// import { useRouter } from "next/router";

function Index({ type, content }) {
  return (
    <div>
      <ServiceInfo type={type} content={content} />
    </div>
  );
}
export default Index;
export async function getStaticProps({ params }) {
  const type = params.name;

  const files = {
    engineerS: "engineerS.docx",
    // urbanWastewater: "urbanWastewater.docx",
    // industrialWastewater: "industrialWastewater.docx",
    // industrialWater: "industrialWater.docx",
    // drinkingWater: "drinkingWater.docx",
    operation: "operation.docx",
    afterSale: "afterSale.docx",
    pstation: "pstation.docx",
  };

  const fileName = files[type];

  if (!fileName) {
    return {
      notFound: true,
    };
  }

  const filePath = path.join(process.cwd(), "src", "constants", fileName);

  const buffer = fs.readFileSync(filePath);

  const result = await mammoth.convertToHtml({
    buffer,
  });

  return {
    props: {
      type,
      content: result.value,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: "engineerS",
        },
      },
      {
        params: {
          name: "operation",
        },
      },
      {
        params: {
          name: "afterSale",
        },
      },
      {
        params: {
          name: "pstation",
        },
      },
      // {
      //   params: {
      //     name: "urbanWastewater",
      //   },
      // },
      // {
      //   params: {
      //     name: "industrialWastewater",
      //   },
      // },
      // {
      //   params: {
      //     name: "industrialWater",
      //   },
      // },
      // {
      //   params: {
      //     name: "drinkingWater",
      //   },
      // },
    ],

    fallback: false,
  };
}

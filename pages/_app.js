import Layout from "@/components/layout/Layout";

import "@/styles/globals.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { useRouter } from "next/router";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // اگر URL با /en شروع شود، سایت انگلیسی است
  const isEnglish = router.asPath.startsWith("/en");

  return (
    <SessionProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="author"
          content="شرکت مهندسی"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={isEnglish ? "site-en" : "site-fa"}
        dir={isEnglish ? "ltr" : "rtl"}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>

    </SessionProvider>
  );
}

export default MyApp;

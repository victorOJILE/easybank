import Head from "next/head";
import "/styles/globals.css";

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Next generation digital banking</title>
        <meta name="description" content="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

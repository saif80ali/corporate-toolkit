import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from '../components/layout'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  const title = pageProps.title || "Corporate Toolkit";
  return (
    <Layout title={title}>
      <Component {...pageProps} />
    </Layout>
  );
}
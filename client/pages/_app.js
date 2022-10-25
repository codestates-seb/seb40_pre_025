import Layout from "../components/Layout";

export default function Myapp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
      <style jsx global>{``}</style>
    </Layout>
  );
}

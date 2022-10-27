import Layout from "../components/Layout";
import wrapper from "../store/configureStore";
import PropTypes from "prop-types";

const Myapp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Layout>
      {getLayout(<Component {...pageProps}></Component>)}
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </Layout>
  );
};
Myapp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(Myapp);

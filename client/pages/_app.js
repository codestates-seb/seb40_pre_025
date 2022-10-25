import Layout from "../components/Layout";
import wrapper from "../store/configureStore";
import PropTypes from "prop-types";

const Myapp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps}></Component>
      <style jsx global>{``}</style>
    </Layout>
  );
};
Myapp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(Myapp);

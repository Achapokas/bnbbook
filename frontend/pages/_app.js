import React from 'react';
import App from "next/app";
import Layout from "../components/Layout";
import withApollo from "../lib/apollo";


export const MyApp = ({ Component, pageProps }) => {
    
    return (
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default withApollo({ ssr: true })(MyApp);
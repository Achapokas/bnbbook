import React from 'react';
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";


export const Layout = ({children}) => {
    const title = "Welcome to Nextjs";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossOrigin="anonymous"
                />
                <script src="https://js.stripe.com/v3" />
            </Head>
            <header>
                <Nav>
                    <NavItem>
                        <Link href="/">
                            Home
                        </Link>
                    </NavItem>
                </Nav>
            </header>
            <Container>{children}</Container>
        </>
    )
}

export default Layout
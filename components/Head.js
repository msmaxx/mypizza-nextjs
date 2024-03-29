import * as React from "react";
import NextHead from "next/head";
import {GoogleFonts} from "next-google-fonts";

import NavBar from "./NavBar";


export const Head = ({title}) => (
    <React.Fragment>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"/>
        <NavBar/>
        <NextHead>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>

            <title>{title}</title>
        </NextHead>
    </React.Fragment>
);

export default Head;
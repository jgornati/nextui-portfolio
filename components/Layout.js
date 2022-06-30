import Head from 'next/head'
import React from "react";
import Sun from "../assets/icons/sun";
import Moon from "../assets/icons/moon";
import { Switch, useTheme, Link } from "@nextui-org/react";
import NextLink from 'next/link';
import { useTheme as useNextTheme } from 'next-themes'
import Github from "../assets/icons/github";
import LinkedIn from "../assets/icons/in";


export default function Layout({children}) {
    return (
        <>
            <Head>
                <meta name="description" content="Testing NextUI"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>{children}</main>
        </>
    )
}
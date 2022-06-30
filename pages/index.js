import React, { useEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";
import useSWR from "swr";
import dynamic from "next/dynamic";
import { Container, Link, Switch, useTheme } from "@nextui-org/react";
import NextLink from "next/link";

//Icons
import Github from "../assets/icons/github";
import LinkedIn from "../assets/icons/in";
import Sun from "../assets/icons/sun";
import Moon from "../assets/icons/moon";

//Components

const NavBar = dynamic(import( "../library/NavBar/NavBar"));
const Layout = dynamic(import("../components/Layout"));
const Home = dynamic(import("../components/home/Home"));
const About = dynamic(import("../components/home/About"));
const Projects = dynamic(import("../components/home/Projects"));

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    const {isDark, type} = useTheme();
    const {setTheme} = useNextTheme();
    const {data, error} = useSWR(`/api/person`, fetcher)

    useEffect(() => {
        document.title = `${data ? data.name + "'s Portfolio" : ""}`;
    }, [data])

    if (!data)
        //todo skeletons
        return (<></>);
    else
        return (
            <>
                <NavBar>
                    <NextLink href={data.github} passHref>
                        <Link color={"text"} target={"_blank"} style={{marginRight: "8px"}}>
                            <Github/>
                        </Link>
                    </NextLink>
                    <NextLink href={data.linkedin} passHref>
                        <Link color={"text"} target={"_blank"} style={{marginRight: "13px"}}>
                            <LinkedIn/>
                        </Link>
                    </NextLink>
                    <Switch
                        size={"xs"}
                        shadow
                        iconOff={<Sun filled/>}
                        iconOn={<Moon filled/>}
                        gradient
                        checked={isDark}
                        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                    />
                </NavBar>
                <Container css={{
                    position: "fixed",
                    bottom: "24px",
                    right: "0px",
                    zIndex: 2,
                    writingMode: "vertical-rl",
                    '@xsMax': {
                        display: "none"
                    },
                }}>
                    <NextLink href={`mailto:${data.email}`} passHref>
                        <Link color={"text"} css={{letterSpacing: "1px", fontSize: ".85rem"}}>
                            {data.email}
                        </Link>
                    </NextLink>
                </Container>
                <Home name={data.name} subtitle={data.subtitle} email={data.email}/>
                <About aboutme={data.aboutme}/>
                <Projects projects={data.projects}/>
            </>
        )
}


Index.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

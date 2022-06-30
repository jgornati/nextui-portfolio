import { useTheme as useNextTheme } from 'next-themes'
import style from '../../styles/About.module.css';
//Components
import { Text, Switch, useTheme, Row, Col, Card, Container, Grid } from '@nextui-org/react'
import ContainerLimit from "../../library/ContainerLimit";
import Image from 'next/image';
import { useEffect, useRef } from "react";
//Icons

export default function About(props) {
    const skillRef = useRef();
    const {isDark, type} = useTheme();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    function isScrolledIntoView(e) {
        let docViewTop = window.scrollY;
        let docViewBottom = docViewTop + window.innerHeight;
        let elemBottom = e.getBoundingClientRect().bottom;

        return ((elemBottom <= docViewBottom) && (elemBottom > 0));
    }

    const handleScroll = () => {
        let containerSkill = skillRef.current;

        let elemTop = containerSkill.getBoundingClientRect().top;
        let varColor = ((window.scrollY - elemTop) / (2000 - elemTop)) * 100;

        if (isScrolledIntoView(containerSkill)) {
            skillRef.current.style.transform = `rotate(${varColor}deg)`;
            let childrenElements = containerSkill.querySelectorAll('div');
            childrenElements.forEach((child) => {
                child.style.transform = `rotate(${-varColor}deg)`;
            });
        }

    }

    return (
        <div className={style.homeContainer}>
            <ContainerLimit className={style.homeContainerLimit}>
                <Text
                    h2
                    size={30}
                    weight="black"
                    css={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "40px",
                        whiteSpace: "nowrap",
                        "&:after": {
                            content: "''",
                            display: "block",
                            position: "relative",
                            top: 0,
                            maxWidth: "300px",
                            width: "100%",
                            height: "1px",
                            marginLeft: "20px",
                            backgroundColor: "rgba(255,144,81,0.4)",
                        }
                    }}
                >
                    About Me
                </Text>
                <Grid.Container justify={"center"}>
                    <Grid xs={12} md={6} lg={6}>
                        <Container css={{p: 0}}>
                            <Text
                                p
                                size={15}
                                css={{
                                    letterSpacing: '1px',
                                    // lineHeight: "normal",
                                    maxWidth: "750px",
                                    margin: "10px 0",
                                }}
                                weight="light"
                            >
                                {props.aboutme.text}
                            </Text>
                            <Text
                                h6
                                size={15}
                                weight="light"
                            >
                                Here are a few technologies I've been working with recently:
                            </Text>
                            <div className={style.containerSkills} ref={skillRef}>
                                {
                                    props.aboutme.skills.map((skill, i) => {
                                        return <div key={i}>
                                            <img
                                                src={!isDark && skill.logoForWhiteTheme ? skill.logoForWhiteTheme : skill.logoForDarkTheme}
                                                alt="react" width="40" height="40" style={{maxWidth: "100%"}}/>
                                        </div>
                                    })
                                }
                            </div>
                        </Container>
                    </Grid>
                    <Grid xs={12} md={6} lg={6}>
                        <div className={style.wrapperProfile}>
                            <div className={style.containerProfileImage}>
                                <Image src={props.aboutme.photo} layout={"fill"} objectFit={"cover"}/>
                            </div>
                        </div>
                    </Grid>
                </Grid.Container>

            </ContainerLimit>
        </div>
    )
}


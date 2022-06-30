import { useTheme as useNextTheme } from 'next-themes'
import style from '../../styles/Projects.module.css';
//Components
import { Text, Switch, useTheme, Row, Col, Card, Container, Grid, Button, Link } from '@nextui-org/react'
import ContainerLimit from "../../library/ContainerLimit";
import Image from 'next/image';
import React, { useEffect, useRef } from "react";
import NextLink from "next/link";
import Github from "../../assets/icons/github";
import LinkedIn from "../../assets/icons/in";
import LinkIcon from "../../assets/icons/linkIcon";
//Icons

export default function Projects(props) {
    return (
        <div className={style.projectContainer}>
            <ContainerLimit className={style.projectContainerLimit}>
                <Text
                    h2
                    size={30}
                    weight="black"
                    css={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "40px",
                        "&:after": {
                            content: "''",
                            display: "block",
                            position: "relative",
                            top: 0,
                            width: "300px",
                            height: "1px",
                            marginLeft: "20px",
                            backgroundColor: "rgba(255,144,81,0.4)",
                        }
                    }}
                >
                    Some projects I&apos;ve built
                </Text>
                {props.projects.map((project, i) => {
                    return (
                        <Card key={i} cover css={{w: '100%', p: 0, mt: 20}}>
                            <Card.Header css={{
                                position: 'absolute',
                                height: "100%",
                                alignItems: "flex-start",
                                zIndex: 1,
                                top: 5,
                                pl: 25,
                                pt: 20,
                                '@smMax': {
                                    backgroundColor: "rgba(0, 0, 0, 0.84)"
                                }
                            }}>
                                <Grid sm={4}>
                                    <Col>
                                        <Text
                                            size={12}
                                            weight="bold"
                                            transform="uppercase"
                                            color="#9E9E9E"
                                        >
                                            {project.techList}
                                        </Text>
                                        <Text h3 color="white">
                                            {project.name}
                                        </Text>
                                        <Text color="#d1d1d1" size={13}>
                                            {project.description}
                                        </Text>
                                        <div style={{marginTop: "15px", display: "flex", alignItems: "center"}}>
                                            {
                                                project.githubLink &&
                                                <NextLink href={project.githubLink} passHref>
                                                    <Link target={"_blank"} style={{marginRight: "8px", color: "#fff"}}>
                                                        <Github/>
                                                    </Link>
                                                </NextLink>
                                            }
                                            {
                                                project.link &&
                                                <NextLink href={project.link} passHref>
                                                    <Link target={"_blank"}
                                                          style={{marginRight: "13px", color: "#fff"}}>
                                                        <LinkIcon/>
                                                    </Link>
                                                </NextLink>
                                            }
                                        </div>
                                    </Col>
                                </Grid>
                            </Card.Header>
                            <Card.Body>
                                <Card.Image
                                    src={project.image}
                                    height={430}
                                    width="100%"
                                    alt={project.name}
                                />
                            </Card.Body>
                        </Card>)
                })}
            </ContainerLimit>
        </div>
    )
}


import { useTheme as useNextTheme } from 'next-themes'
import style from '../../styles/Home.module.css';
//Components
import { Text, Switch, useTheme, Button, Link } from '@nextui-org/react'
import ContainerLimit from "../../library/ContainerLimit";
import LinkNext from "next/link";
//Icons


export default function Home(props) {
    return (
        <div className={style.homeContainer}>
            <div className={style.gradientContainer}>
                <img src={"/gradient-left.svg"}/>
                <img src={"/gradient-right.svg"}/>
            </div>
            <ContainerLimit className={style.homeContainerLimit}>
                <Text
                    h2
                    size={200}
                    weight="black"
                    css={{
                        '@smMax': {
                            fontSize: 100
                        },
                    }}
                >
                    Hi!
                </Text>
                <Text
                    h1
                    size={90}
                    css={{
                        // textGradient: '90deg, $purple300 -4%, $blue500 40%',
                        textGradient: '35deg, $yellow500 -20%, $red500 100%',
                        letterSpacing: '1px',
                        '@smMax': {
                            fontSize: 25,
                            lineHeight: "initial"
                        },
                    }}
                    weight="bold"
                >

                    I&apos;m {props.name}
                </Text>
                <Text
                    p
                    size={25}
                    css={{
                        // textGradient: '90deg, $blue500 10%, $white 60%',
                        letterSpacing: '1px',
                        lineHeight: "normal",
                        margin: 0,
                        '@smMax': {
                            fontSize: 15,
                            lineHeight: "initial"
                        },
                    }}
                    weight="thin"
                >
                    {props.subtitle}
                </Text>
                <LinkNext href={`mailto:${props.email}`}>
                    <Button shadow color="gradient" auto css={{marginTop: "40px"}}>
                        Get in touch
                    </Button>
                </LinkNext>
            </ContainerLimit>
        </div>
    )
}


import React from 'react';
import { useTheme } from "@nextui-org/react";
import style from './NavBar.module.css';

export default function NavBar(props) {
    const {isDark, type} = useTheme();

    return (
        <nav style={{
            backgroundColor: isDark ? "hsla(0,0%,0%,0.6)" : "hsla(0,0%,100%,0.6)",
        }} className={style.navbar}>
            {props.children}
        </nav>
    );
}
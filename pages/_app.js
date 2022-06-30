import '../styles/globals.css'
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({Component, pageProps}) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)

    const lightTheme = createTheme({
        type: 'light',
        theme: {}
    })

    const darkTheme = createTheme({
        type: 'dark',
        theme: {}
    })

    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                {getLayout(<Component {...pageProps} />)}
            </NextUIProvider>
        </NextThemesProvider>
    )
}

export default MyApp

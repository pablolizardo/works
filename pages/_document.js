import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NY4R3KG75J"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-NY4R3KG75J');`
                            }}
                    />
                    <meta
                        name="description"
                        content="Personal Site of Pablo Lizardo"
                        key='description'
                    />
                    <title>Pablo Lizardo 👨‍💻</title>
                    <meta name="title" content="Pablo Lizardo 👨‍💻"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                    <meta name="description" content="Fullstack developer and Graphic Designer at http://tvfuego.com | Owner at http://soki.com.ar | #Laravel #b3d #reactjs #inkscape #tailwindcss #vuejs #godotengine"/>

                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://pablolizardo.com/"/>
                    <meta property="og:title" content="Pablo Lizardo 👨‍💻"/>
                    <meta property="og:description" content="Fullstack developer and Graphic Designer at http://tvfuego.com | Owner at http://soki.com.ar | #Laravel #b3d #reactjs #inkscape #tailwindcss #vuejs #godotengine"/>
                    <meta property="og:image" content="/images/illustrations/viajero/viajero_4_compo.png"/>

                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://pablolizardo.com/"/>
                    <meta property="twitter:title" content="Pablo Lizardo 👨‍💻"/>
                    <meta property="twitter:description" content="Fullstack developer and Graphic Designer at http://tvfuego.com | Owner at http://soki.com.ar | #Laravel #b3d #reactjs #inkscape #tailwindcss #vuejs #godotengine"/>
                    <meta property="twitter:image" content="/images/illustrations/viajero/viajero_4_compo.png"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
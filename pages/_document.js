import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                <link rel="manifest" href="/manifest.json" />
                <script
                    async
                    defer
                    src="https://scripts.simpleanalyticscdn.com/latest.js"
                ></script>
                <noscript>
                    <img
                        src="https://queue.simpleanalyticscdn.com/noscript.gif"
                        alt=""
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </noscript>
                    <script src="
                    https://cdn.jsdelivr.net/npm/echarts@5.4.1/dist/echarts.min.js
                "></script>
                    <link rel="icon" href="/images/favicon.ico" />
                </Head>
                <body className="hide-scrollbar ">
               
                    <Main />
                    <NextScript />
                    <script src="
                    https://cdn.jsdelivr.net/npm/echarts@5.4.1/dist/echarts.min.js
                    "></script>

                    <script src="https://cdn.jsdelivr.net/npm/chart.js@^3" />
                    <script src="https://cdn.jsdelivr.net/npm/moment@^2" />
                    <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-moment@^1" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link rel="icon" href="/images/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />



                    <script
                        async
                        defer
                        src="https://scripts.simpleanalyticscdn.com/latest.js"
                    ></script>
                    <script src="
                    https://cdn.jsdelivr.net/npm/echarts@5.4.1/dist/echarts.min.js
                    "></script>
                    <noscript>
                        <img
                            src="https://queue.simpleanalyticscdn.com/noscript.gif"
                            alt=""
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </noscript>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-T4YCTDNE6L"></script>
          <script

            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'G-T4YCTDNE6L');
              `,
            }}
          >
          </script>
                </body>
               
            </Html>
        );
    }
}

export default MyDocument;

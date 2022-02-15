import Theme from '../styles/theme';
import Head from 'next/head'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import '../styles/globals.scss'


export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
    <>
      <Head>
        <title>Isaias Ponce - Telematics Engineer</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        </meta>
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

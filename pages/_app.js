import React from "react";
import Router from 'next/router';
import { NextUIProvider } from "@nextui-org/react";
import dotenv from "dotenv";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import "@rainbow-me/rainbowkit/styles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme
} from "@rainbow-me/rainbowkit";
import { WagmiProvider, http } from 'wagmi';
import {
  RainbowKitSiweNextAuthProvider,
} from "@rainbow-me/rainbowkit-siwe-next-auth";
import { SessionProvider } from "next-auth/react";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "ProjName",
  projectId: "insertYourProjectId",
  chains: [mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient()


const getSiweMessageOptions = () => ({
  statement:
    "Verify wallet ownership on Degenz.Finance. By signing, an account is created, and you agree to the Terms of Service and Privacy Policy",
});
NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

dotenv.config()
function App({ Component, pageProps }) {
  return (
    <>
    <NextUIProvider>
    <main className="dark text-foreground bg-background">   
     <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider refetchInterval={0} session={pageProps.session}>
          <RainbowKitSiweNextAuthProvider
            getSiweMessageOptions={getSiweMessageOptions}
          >
            <RainbowKitProvider
  
              modalSize="wide"
              initialChain={1}
              theme={darkTheme({
                accentColor: '#5A40FF',
                accentColorForeground: 'white',
                borderRadius: 'large',
                fontStack: 'system',
                fontWeight:"400",
                overlayBlur: 'small',
                })}
              >
                    <main className="flex grow bg-background">
                        <Component {...pageProps} />
                    </main>
                    <ToastContainer 
                      autoClose={2000}
                      theme="dark"
                      position="top-left"
                      pauseOnHover={false}
                    />
            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </SessionProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </main>
    </NextUIProvider>
    </>
  );
}

export default App;

import Footer from "@/components/Layout/Footer";
import NavBar from "@/components/Layout/NavBar";
import AuthModalsProvider from "@/components/auth/AuthModalsProvider";
import useAuthenticatedUser from "@/hooks/useAuthenticatedUser";
import styles from "@/styles/App.module.css";
import "@/styles/globals.scss";
import "@/styles/utils.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { Container, SSRProvider } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useOnboardingRedirect();

  return (
    <>
      <Head>
        <title>Invsted - Share your ideas</title>
        <meta
          name="description"
          content="A full-stack NextJS project by FluxFlow Digital"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://uploads-ssl.webflow.com/634f00870700514f27d65385/634f06fea01e55a27dfba50c_InvestED%20favicon.jpeg" rel="shortcut icon" type="image/x-icon"/>
        <link href="https://uploads-ssl.webflow.com/634f00870700514f27d65385/634f07374a2e8f41558c837b_InvestED%20-%20webicon.jpeg" rel="apple-touch-icon"/>  
       
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SSRProvider>
        <div>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </SSRProvider>
    </>
  );
}

function useOnboardingRedirect() {
  const { user } = useAuthenticatedUser();
  const router = useRouter();

  useEffect(() => {
    if (user && !user.username && router.pathname !== "/onboarding") {
      router.push("/onboarding?returnTo=" + router.asPath);
    }
  }, [user, router]);
}

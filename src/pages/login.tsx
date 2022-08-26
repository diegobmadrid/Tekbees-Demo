import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/Header/Header";
import { LoginPage } from "../../components/Login/LoginPage";


const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>Tekbees - LogIn</title>
                <meta name="demo-app" content="demo-app" />
            </Head>
            <Header />
            <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
                <div className="w-full flex justify-center">
                    <LoginPage />
                </div>
            </main>
        </>
    );
};

export default Login;

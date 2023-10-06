import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getProviders, useSession } from "next-auth/react";
import { useEffect } from "react";
import { AuthenticationLayout } from "../layouts/Authentication";
import * as Server from "../lib/server";
import { DASHBOARD_URL } from "../constants";

interface Props {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

export default function SignIn({ providers }: Props) {
    const { data: session } = useSession();
    console.log("data => ", session);
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.replace("/");
        }
    }, [router, session]);

    return (
        <div>
            <h1>email: {session?.user.email}</h1>
            <h1>id: {session?.user.id}</h1>
            <h1>name: {session?.user.info.name}</h1>
            <h1>image: {session?.user.image}</h1>
            <AuthenticationLayout providers={providers} />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    // const session = await Server.getSession(req, res);

    // // If logged in, go to dashboard
    // if (session) {
    //     console.log("session from signin is  => ", session);
    //     return {
    //         redirect: {
    //             destination: "/",
    //             permanent: false,
    //         },
    //     };
    // }

    // Get NextAuth providers from your [...nextAuth.ts] file
    const providers = await getProviders();

    return {
        props: { providers },
    };
};

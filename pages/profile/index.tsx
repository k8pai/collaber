import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import { AuthenticatedLayout } from "../../layouts/Authenticated";
import * as Server from "../../lib/server";
import { Group } from "../../types";
import { Session } from "next-auth";
import { ProfileLayout } from "../../layouts/Profile";
import { DocumentsLayout } from "../../layouts/Documents";

export default function Index({
    groups,
    session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <AuthenticatedLayout session={session}>
            <ProfileLayout groups={groups}>
                <DocumentsLayout filter="all" />
            </ProfileLayout>
        </AuthenticatedLayout>
    );
}

interface ServerSideProps {
    groups: Group[];
    session: Session;
}

// Authenticate on server and retrieve a list of the current user's groups
export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
    context
) => {
    const session = await Server.getSession(context.req, context.res);

    // If not logged in, redirect to marketing page
    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    const groups = await Server.getGroups([]);

    return {
        props: { groups, session },
    };
};

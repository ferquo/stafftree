import { Title, Text } from '@mantine/core';
import useStyles from './dashboard.styles';
import { getSession, GetSessionParams, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Footer } from '../../components/Footer/Footer';
import { User } from '../[slug]';
import { GetServerSideProps } from 'next/types';

type DashBoardProps = {
    user: User,
    accessToken: string,
}

export const getServerSideProps: GetServerSideProps<{ user: User, accessToken: string}> = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    const { id: userId, token } = session.user as any;
    const res = await fetch(
        `http://stafflink-be.westeurope.cloudapp.azure.com/api/collections/users/records/${userId}?expand=links(user)`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }
    )
    const parsedResponse = await res.json();
    const user = parsedResponse as User;

    return {
        props: {
            user: user,
            accessToken: token,
        },
    }
}

export default function Dashboard(props: { user: User, accessToken: string }) {
    const { classes } = useStyles();
    const { user } = props;
    const { data: session } = useSession();

    return (
        <>
            <Title className={classes.title} align="center" mt={100}>
                Welcome back {user.name} to the
                <Text inherit variant="gradient" component="span">
                    Dashboard
                </Text>
            </Title>
            <Footer />
        </>
    );
}

import { Title, Text, createStyles } from '@mantine/core';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontSize: 100,
        fontWeight: 900,
        letterSpacing: -2,

        [theme.fn.smallerThan('md')]: {
            fontSize: 50,
        },
    },
}));

type DashboardPageProps = {
    
}

async function DashboardPage(props: DashboardPageProps) {


    const { classes } = useStyles();
    const { data: session, status } = useSession();
    if (status === "authenticated" && session?.user) {
        const user = session.user as any;

        return (
            <>
                <Title className={classes.title} align="center" mt={100}>
                    Welcome to your dashboard{' '}
                    <Text inherit variant="gradient" component="span">
                        {user.name}
                    </Text>
                </Title>
            </>
        );
    }

    return {
        redirect: {
            destination: 'api/auth/signin',
            permanent: false,
        }
    }
};

export default DashboardPage;

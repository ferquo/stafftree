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

type BioPageProps = {
    params: {
        slug: string,
    }
}

function Bio({ params: { slug } }: BioPageProps) {


    const { classes } = useStyles();

    return(
        <>
            <Title className={classes.title} align="center" mt={100}>
                Welcome to{' '}
                <Text inherit variant="gradient" component="span">
                    {slug}
                </Text>
            </Title>
        </>
    );
};

export default Bio;

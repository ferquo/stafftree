import { Title, Text, Image, Anchor } from '@mantine/core';
import { Footer } from '../components/Footer/Footer';
import useStyles from './slug.styles';
import { getSession, GetSessionParams, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { userAgent } from 'next/server';

export type User = {
    avatarURL: string
    expand: Expand
    id: string
    name: string
}

export interface Expand {
    "links(user)": LinksUser[]
}

export interface LinksUser {
    name: string
    profilePicture: string
    type: string
    url: string
    user: string
}

export const getServerSideProps: GetServerSideProps<{user: User}> = async (context) => {
    const { slug } = context.query;
    const res = await fetch(`http://stafflink-be.westeurope.cloudapp.azure.com/api/collections/users/records?filter=(slug='${slug}')&expand=links(user)`)
    const parsedResponse = await res.json();
    const user = parsedResponse.items[0] as User;

    return {
        props: {
            user: user
        },
    }
}

export default function BioPage(props: {user: User}) {
    const { classes } = useStyles();
    const { user } = props;

    return (
        <>
            <div className={classes.heroImageContainer}>
                <Image
                    alt="The guitarist in the concert."
                    src={user.avatarURL}
                    radius={96}
                />
            </div>
            <Title className={classes.title} align="center">
                <Text inherit variant="gradient" component="span">
                    { `${user.name}` }
                </Text>
            </Title>
            <div className={classes.linksContainer}>
                {
                    user.expand['links(user)'].map((userLink) => (
                        <Anchor
                            href={userLink.url}
                            target="_blank"
                            className={classes.link}
                            underline={false}
                        >
                            <Text
                                inherit
                                variant="gradient"
                                className={classes.linkText}
                                component="span"
                                align='center'
                            >
                                {userLink.name}
                            </Text>
                        </Anchor>
                    ))
                }
            </div>
            <Footer />
        </>
    );
}

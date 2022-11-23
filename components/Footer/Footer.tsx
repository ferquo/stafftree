import { Title, Text, Container, Group, ActionIcon } from '@mantine/core';
import useStyles from './Footer.styles';
import Link from 'next/link';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons';

export function Footer() {
    const { classes } = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Text color="dimmed" size="sm">
                    © 2022 Powered by Staffbase.
                </Text>     
                <Group spacing={0} className={classes.links} position="right" noWrap>
                    <ActionIcon size="lg" component="a" href="https://twitter.com/Staffbase">
                        <IconBrandTwitter size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" component="a" href="https://facebook.com/Staffbase">
                        <IconBrandFacebook size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" component="a" href="https://linkedin.com/company/9223407">
                        <IconBrandLinkedin size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" component="a" href="https://instagram.com/staffbase">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}

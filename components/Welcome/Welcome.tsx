import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export function Welcome() {
  const { classes } = useStyles();
  const { data: session, status } = useSession();

  if (status === "authenticated" && session?.user) {
    const user = session.user as any;

    return <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome back {' '}
        <Text inherit variant="gradient" component="span">
          {user.name}
        </Text>
      </Title>

      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Check out your{' '}
        <Link href="/dashboard">dashboard</Link>,
      </Text>

      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Or preview you{' '}
        <Link href={`/${encodeURIComponent(user.slug ?? '' )}`}>bio page</Link>
      </Text>

    </>
  }

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome{' '}
        { session?.user?.name ?? null }
        to{' '}
        <Text inherit variant="gradient" component="span">
          STAFFTREE
        </Text>
      </Title>

      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        To get started please{' '}
        <Link href="/api/auth/signin">sign in</Link>
      </Text>
    </>
  );
}

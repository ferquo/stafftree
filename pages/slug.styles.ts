import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontSize: 32,
        fontWeight: 900,
        letterSpacing: -2,
        marginTop: 20,

        [theme.fn.smallerThan('md')]: {
            fontSize: 26,
        },
    },
    heroImageContainer: {
        width: 96,
        height: 96,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
    },
    linksContainer: {
        width: 680,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
    },
    link: {
        textDecoration: 'none',
        display: 'block',
        width: '100%',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 16,
        paddingBottom: 16,
        justifyContent: 'center',
        border: '1px solid #0c8599',
        borderRadius: 28,
        margin: 20,
        '&:hover': {
            backgroundColor: `linear-gradient(to right, ${theme.colors.blue}, ${theme.colors.grape}`,
        },
    },
    linkText: {
        fontWeight: 900,
        display: 'block',
        fontSize: 20,
    },
}));

import { Anchor, createStyles, Header as MantineHeader, Group, rem } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import { ThemeButton } from './ThemeButton';

const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));

export function Header() {
  const { classes } = useStyles();

  return (
    <MantineHeader height={56} className={classes.header} mb={120} withBorder={false}>
      <div className={classes.inner}>
        <Group>
            <Anchor
              component={NavLink}
              to="/favorites"
            >
              Favorites
            </Anchor>
            <ThemeButton />
        </Group>
      </div>
    </MantineHeader>
  );
}
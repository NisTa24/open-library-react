import { ActionIcon, Anchor, createStyles, Header as MantineHeader, Group, rem, Space, Text, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { ThemeButton } from '../ThemeButton';
import { Book } from '../Book';
import { onEnter } from '../../utils';

const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

export function SearchResultsHeader() {
    const { classes } = useStyles();
    const [searchTitle, setSearchTitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (searchTitle.length) {
            navigate(`/search?q=${searchTitle}`);
        }
    };

    return (
        <MantineHeader height={56} className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <NavLink to="/">
                        <Book width={40} />
                    </NavLink>
                    <Space w={16} />
                    <TextInput
                        onChange={(event) => {
                            setSearchTitle(event.currentTarget.value);
                        }}
                        onKeyPress={onEnter(handleSubmit)}
                        placeholder="Search for a book" 
                        radius="xl" 
                        style={{ width: '300px' }} 
                        rightSection={
                            <ActionIcon size="xl" onClick={handleSubmit}>
                                <IconSearch size="24px" />
                            </ActionIcon>} 
                        value={searchTitle}
                    />
                </Group>
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
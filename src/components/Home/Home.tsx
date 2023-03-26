import { AppShell, ActionIcon, Group, Space, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { Header } from '../Header';
import { Book } from '../Book';
import { onEnter } from '../../utils';

export const Home = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.length) {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <AppShell
            padding="md"
            header={<Header />}
        >
            <Group position="center" pt="150px" style={{ flexDirection: 'column' }}>
                <Book width="512" height="160" />
                <Space h={16} />
                <Group>
                    <TextInput
                        onChange={(event) => {
                            setSearchQuery(event.currentTarget.value);
                        }}
                        onKeyPress={onEnter(handleSubmit)}
                        placeholder="Search for a book" 
                        radius="xl" 
                        size="xl" 
                        style={{ width: '500px' }} 
                        rightSection={
                            <ActionIcon size="xl" onClick={handleSubmit}>
                                <IconSearch size="64px" />
                            </ActionIcon>} 
                        value={searchQuery}
                    />
                </Group>
            </Group>
        </AppShell>
    )
}
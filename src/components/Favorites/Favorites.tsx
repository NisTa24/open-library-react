import { AppShell, Center, Space, Text } from '@mantine/core';
import { useMemo, useState } from 'react';

import { SearchResultsHeader } from '../SearchResults';
import { useLocalStorage } from '../../utils/use-LocalStorage';
import { Book } from '../../services'
import { BookDetails } from '../BookDetails';
import { BookLists } from '../BookLists';

export const Favorites = () => {
    const [favorites] = useLocalStorage('favoriteBookList', []);

    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const [selectedBook, setSelectedBook] = useState<Book>();

    const content = useMemo(() => {
        return (
            <Center>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text>
                        {favorites.length} favorite items
                    </Text>
                    <Space h={16} />
                    <BookLists bookLists={favorites} setOpenDetails={setOpenDetails} setSelectedBook={setSelectedBook} />
                </div>
                {
                    selectedBook ? (
                        <BookDetails bookDetails={selectedBook} openDetails={openDetails} setOpenDetails={setOpenDetails} />
                    ) : null
                }
            </Center>
        )
    }, [favorites, openDetails, selectedBook]);

    return (
        <AppShell
            padding="md"
            header={<SearchResultsHeader />}
        >
            {content}
        </AppShell>
    )
}
import { AppShell, Center, Group, Loader, Pagination, Space, Text } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { IconCloudFog } from '@tabler/icons-react'

import { SearchResultsHeader } from './SearchResultsHeader';
import { Book, useGetBookSearchResultsQuery } from '../../services';
import { BookDetails } from '../BookDetails';
import { BookLists } from '../BookLists';

export const SearchResults = () => {
    const [searchParams, ] = useSearchParams();

    const queryKey = searchParams.get('q');

    const [page, setPage] = useState(1);
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const [selectedBook, setSelectedBook] = useState<Book>();

    const { data: libraryResponse, isFetching, isError, } = useGetBookSearchResultsQuery({ title: queryKey ?? '', page, });

    const content = useMemo(() => {
        if (isFetching) {
            return (
                <Group h="100%">
                    <Center sx={{ height: '100%', width: '100%' }}>
                        <Loader />
                    </Center>
                </Group>
            )
        }

        if (isError || !libraryResponse) {
            return (
                <Group h="100%">
                    <Center sx={{ height: '100%', width: '100%' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <IconCloudFog size={48} />
                            <Space h={8} />
                            <Text>Something went wrong</Text>
                        </div>
                    </Center>
                </Group>
            )
        }

        return (
            <Center>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text data-test-id="totalResults">
                        {libraryResponse.numFound > 1 ? `${libraryResponse.numFound} search results found` : `${libraryResponse.numFound} search result found`} 
                    </Text>
                    <Space h={16} />
                    <BookLists bookLists={libraryResponse.docs} setOpenDetails={setOpenDetails} setSelectedBook={setSelectedBook} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination defaultValue={page} onChange={setPage} total={libraryResponse.num_found / 20} />
                    </div>
                </div>
                {
                    selectedBook ? (
                        <BookDetails bookDetails={selectedBook} openDetails={openDetails} setOpenDetails={setOpenDetails} />
                    ) : null
                }
            </Center>
        )
    }, [libraryResponse, isFetching, isError, page, openDetails, selectedBook]);

    return (
        <AppShell
            padding="md"
            header={<SearchResultsHeader />}
        >
            {content}
        </AppShell>
    )
}
import { Box, createStyles, Group, Stack, Space, Text } from '@mantine/core';

import { Book } from '../../services'

const useStyles = createStyles(() => ({
    outerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
    },
    innerWrapper: {
        position: 'relative',
        maxWidth: '100%',
        height: '100%',
        'img': {
            maxWidth: '100%',
            height: '100%',
            objectFit: 'contain',
            userSelect: 'none',
        }
    },
    contentWrapper: {
        width: '500px',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
}));

interface BookListsProps {
    bookLists: Book[];
    setOpenDetails: (arg1: boolean) => void;
    setSelectedBook: (arg1: Book) => void;
}

export const BookLists = ({ bookLists, setOpenDetails, setSelectedBook}: BookListsProps) => {
    const { classes } = useStyles();

    return (
        <Stack spacing={32}>
        {
            bookLists.map((doc) => (
                <div key={doc.key}>
                    <Group data-test-id="bookInfo" noWrap>
                        <Box
                            onClick={() => {
                                setOpenDetails(true);
                                setSelectedBook(doc);
                            }}
                            sx={(theme) => ({
                                aspectRatio: '1 / 1',
                                border: '3px solid transparent',
                                '&:hover': {
                                    borderColor: 'blue',
                                    cursor: 'grab'
                                },
                            })}
                        >
                            <div className={classes.outerContainer}>
                                <div className={classes.innerWrapper}>
                                    {
                                        doc.cover_i ? (
                                            <img
                                                src={`https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`}
                                            />
                                        ) : (
                                            <img
                                                src='/assets/no_thumbnail.jpg'
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        </Box>
                        <Box className={classes.contentWrapper}>
                            <div style={{ display: 'flex' }}>
                                <Text fw={700}>
                                    Title:
                                </Text>
                                <Space w={16} />
                                <Text data-test-id="bookTitle" lineClamp={1} sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }} >
                                    {doc.title}
                                </Text>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Text fw={700}>
                                    Author:
                                </Text>
                                <Space w={16} />
                                <Text data-test-id="authorName" lineClamp={1} sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }} >
                                    {doc.author_name?.at(0) ?? ''}
                                </Text>
                            </div>
                        </Box>
                    </Group>
                </div>
            ))
        }
        </Stack>
    )
}
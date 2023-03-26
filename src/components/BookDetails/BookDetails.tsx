import { ActionIcon, Button, createStyles, Divider, Modal, Rating, Space, Text } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react'

import { Book } from '../../services';
import { useLocalStorage } from '../../utils/use-LocalStorage';

interface BookDetailsProps {
    bookDetails: Book,
    openDetails: boolean;
    setOpenDetails: (value: boolean) => void;
}

const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      flexDirection: 'row',
      gap: '32px'
    },  
}));

export const BookDetails = ({ bookDetails, openDetails, setOpenDetails }: BookDetailsProps) => {
    const { classes } = useStyles();
    const [favorites, setFavorites, removeFavorites] = useLocalStorage('favoriteBookList', []);

    const detailLists = [
        {
            title: 'Title',
            value: bookDetails.title,
        },
        {
            title: 'Author',
            value: bookDetails.author_name,
        },
        {
            title: 'First publish year',
            value: bookDetails.first_publish_year,
        },
        {
            title: 'Number of editions',
            value: bookDetails.edition_count,
        },
        {
            title: 'Number of publishers',
            value: bookDetails.publisher?.length
        },
        {
            title: 'Average ratings',
            value: bookDetails.ratings_average ? Number(bookDetails.ratings_average).toFixed(2) : 'N/A',
        },
        {
            title: 'Number of available languages',
            value: bookDetails.language?.length ?? 'N/A',
        },
        {
            title: 'Number of pages',
            value: bookDetails.number_of_pages_median,
        },
        {
            title: 'Notable person in the book',
            value: bookDetails.person?.at(0) ?? 'N/A',
        },
        {
            title: 'Readers',
            value: ((bookDetails.currently_reading_count ?? 0) + (bookDetails.already_read_count ?? 0)) ?? 'N/A'
        },
        {
            title: 'Want to read',
            value: bookDetails.want_to_read_count ?? 'N/A'
        },
    ];

    const localResultIdx = favorites.findIndex((doc) => 
            doc.title === bookDetails.title 
            && doc.number_of_pages_median === bookDetails.number_of_pages_median 
            && doc.version === bookDetails.version
        );

    return (
        <Modal
            onClose={() => {
                setOpenDetails(false);
            }}
            opened={openDetails}
            size="700px"
            title={<Text fw="700" size="md">Details</Text>}
        >
            <Divider />
            <Space h={16} />
            <div className={classes.inner}>
                <div data-test-id="bookCover">
                    {
                        bookDetails.cover_i ? (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-M.jpg`}
                            />
                        ) : (
                            <img
                                src='/assets/no_thumbnail.jpg'
                            />
                        )
                    }
                    <Space h={16} />
                    <Rating data-test-id="ratings" defaultValue={bookDetails.ratings_average} readOnly />
                </div>
                <div>
                    {
                        detailLists.map((detail) => (
                            <div style={{ display: 'flex' }} key={detail.title}>
                                <Text fw={700}>
                                    {detail.title}
                                </Text>
                                <Space w={16} />
                                <Text>
                                    {detail.value}
                                </Text>
                            </div>
                        ))
                    }
                    <Space h={16} />
                    {
                        localResultIdx > -1 ? (
                            <ActionIcon color="red" onClick={() => removeFavorites(bookDetails)} variant="outline">
                                <IconHeartFilled stroke={1.5} />
                            </ActionIcon>
                        ) : (
                            <Button onClick={() => setFavorites((books) => [...books, bookDetails])}>
                                Add to favorites
                            </Button>
                        )
                    }
                </div>
            </div>
        </Modal>
    )
}
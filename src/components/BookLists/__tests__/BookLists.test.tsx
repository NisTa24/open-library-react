import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';

import { TestWrapper } from '../../TestWrapper';
import { BookLists } from '../BookLists';
import { Book } from '../../../services';

describe('src/components/BookLists/__tests__', () => {
    it('Test', async () => {
        const data: Book[] = [
            {
                key: "/works/OL82586W",
                title: "Harry Potter and the Deathly Hallows",
                first_publish_year: 2007,
                number_of_pages_median: 673,
                ratings_average: 4.390558,
                want_to_read_count: 1873,
                currently_reading_count: 131,
                already_read_count: 386,
                cover_i: 10110415,
                publisher: [
                    "Sifre ḥemed",
                ],
                language: [
                    "spa",
                    "bul",
                    "eng",
                ],
                author_name: [
                    "J. K. Rowling"
                ],
                person: [
                    "Harry Potter",
                ],
                _version_: 1759911904740900900,
            },
        ];
        const Wrapper = () => {         
            return (
                <TestWrapper>
                    <BookLists bookLists={data} setOpenDetails={() => {}} setSelectedBook={() => {}} />
                </TestWrapper>
            );
        };
        
        render(<Wrapper />);
        await waitFor(() => {
            expect(screen.getAllByTestId('bookInfo')).toHaveLength(1);
            expect(screen.getAllByTestId('bookTitle')).toBeTruthy();
            expect(screen.getAllByTestId('authorName')).toBeTruthy();
        });
    });
});

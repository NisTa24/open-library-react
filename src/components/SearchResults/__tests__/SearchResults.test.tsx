import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';

import { TestWrapper } from '../../TestWrapper';
import { SearchResults } from '../SearchResults';

describe('src/components/SearchResults/__tests__', () => {
    it('Test', async () => {
        const Wrapper = () => {         
            return (
                <TestWrapper>
                    <SearchResults />
                </TestWrapper>
            );
        };
        
        render(<Wrapper />);
        await waitFor(() => {
            expect(screen.getByTestId('totalResults')).toHaveTextContent('1 search result found');
            expect(screen.getAllByTestId('bookInfo')).toHaveLength(1);
            expect(screen.getAllByTestId('bookTitle')).toBeTruthy();
            expect(screen.getAllByTestId('authorName')).toBeTruthy();
        });
    });
});

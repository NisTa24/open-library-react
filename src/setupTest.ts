import '@testing-library/jest-dom';
import 'jest-canvas-mock';

import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test-id' });

window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

const testData = {
    docs: [
        {
            key: "/works/OL82586W",
            type: "work",
            seed: [
                "/authors/OL23919A"
            ],
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
    ],
    numFound: 1,
    start: 0,
    numFoundExact: true,
    num_found: 1,
    q: "",
    offset: null
}

jest.mock('./services', () => {
    return {
        useGetBookSearchResultsQuery: jest.fn().mockReturnValue({ data: testData })
    }
});
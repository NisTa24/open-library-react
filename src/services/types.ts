export interface Book {
    already_read_count?: number;
    contributor?: string[];
    cover_i?: string | number;
    currently_reading_count?: number;
    edition_count?: number;
    first_publish_year: number;
    first_sentence?: string;
    isbn?: string[];
    language?: string[];
    number_of_pages_median?: number;
    lcc?: string[];
    lccn?: string[];
    olid?: string[];
    person?: string[];
    publisher?: string[];
    publish_year?: number[];
    ratings_average?: number;
    want_to_read_count?: number;
    version?: string | number;
    _version_?: string | number;
    author_name: string[];
    key: string;
    title: string;
}
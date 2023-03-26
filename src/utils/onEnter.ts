import { KeyboardEvent } from 'react';

export const onEnter = (callback: () => void) => {
    return (event: KeyboardEvent<HTMLElement>) => {
        if (event.code === 'Enter') {
            callback();
        }
    };
};

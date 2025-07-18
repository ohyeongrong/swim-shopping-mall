import { useEffect } from 'react';

export default function useBodyScrollLock(lock) {
    useEffect(() => {
        if (lock === true) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto';
        }

        return () => {
        document.body.style.overflow = 'auto';
        };
    }, [lock]);
}
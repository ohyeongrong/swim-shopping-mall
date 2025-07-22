import { useEffect } from 'react';

export default function useBodyScrollLock(lock) {
    console.log('🔒 useBodyScrollLock 실행됨', lock);

    useEffect(() => {
        if (lock === true) {
            console.log('🔒 body 잠금');
            document.body.style.overflow = 'hidden';
        } else {
            console.log('🔓 body 해제');
            document.body.style.overflow = 'auto';
        }

        return () => {
            console.log('🔙 cleanup - body 해제');
            document.body.style.overflow = 'auto';
        };
    }, [lock]);
}

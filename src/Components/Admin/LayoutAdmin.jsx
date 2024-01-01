import React, { useEffect, useState } from 'react';
import { isAuthenticated, isAdmin } from '@/Utilities/auth';
import { useRouter } from 'next/navigation';

export default function LayoutAdmin({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated() || !isAdmin()) {
            router.push('/');
        } else {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }
    }, [router]);

    if (isLoading) {
        return <div className='h-screen flex items-center justify-center'>Loading...</div>;
    }

    return <div className='flex flex-row'>{children}</div>;
}

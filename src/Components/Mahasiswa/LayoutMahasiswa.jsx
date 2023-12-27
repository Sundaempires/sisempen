import React from 'react'
import { isAuthenticated, isMahasiswa } from '@/Utilities/auth'
import { useRouter } from 'next/navigation'

export default function LayoutMahasiswa({ children }) {
    const router = useRouter();
    
    if (isAuthenticated() && isMahasiswa()) {
        return <div className='flex flex-row'>{children}</div>
    } else {
        router.push('/');
    };
}

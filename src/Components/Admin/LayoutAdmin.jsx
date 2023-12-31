import React from 'react'
import { isAuthenticated, isAdmin } from '@/Utilities/auth'
import { useRouter } from 'next/navigation'

export default function LayoutAdmin({ children }) {
    const router = useRouter();
    
    if (isAuthenticated() && isAdmin()) {
        return <div className='flex flex-row'>{children}</div>
    } else {
        router.push('/');
    };
}

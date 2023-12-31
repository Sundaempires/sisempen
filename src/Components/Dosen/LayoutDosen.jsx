import React from 'react'
import { isAuthenticated, isDosen } from '@/Utilities/auth'
import { useRouter } from 'next/navigation'

export default function LayoutDosen({ children }) {
    const router = useRouter();
    
    if (isAuthenticated() && isDosen()) {
        return <div className='flex flex-row'>{children}</div>
    } else {
        router.push('/');
    };
}

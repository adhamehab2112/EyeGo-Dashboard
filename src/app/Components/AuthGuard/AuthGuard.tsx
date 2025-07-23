"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('userToken');
            if (!token) {
                router.push('/login');
            } else {
                setIsAuthenticated(true);
            }
            setIsLoading(false);
        };

        checkAuth();
    }, [router]);

    
    if (isLoading) {
        return null;
    }

    
    return isAuthenticated ? <>{children}</> : null;
}


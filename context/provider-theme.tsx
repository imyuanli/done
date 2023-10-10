'use client'

import {ThemeProvider} from 'next-themes'

export default function ProviderTheme({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme={'light'} enableSystem>
            {children}
        </ThemeProvider>
    );
}

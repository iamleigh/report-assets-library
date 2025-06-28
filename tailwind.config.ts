import type { Config } from 'tailwindcss'

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--gray-50)',
                foreground: 'var(--gray-600)',
            },
            fontSize: {
                base: '16px',
            },
        },
    },
    plugins: [],
} satisfies Config

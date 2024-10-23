/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '320px',
                sm360: '360px',
                sm600: '600px',
                md: '768px',
                lg964: '964px',
                lgg: '1000px',
                lg: '1024px',
                xl: '1280px'
            }
        }
    },
    plugins: []
};


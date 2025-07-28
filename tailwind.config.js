/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
    darkMode: ['selector', '[class*="app-dark"]'],
    content: ['./index.html', './src/**/*.{html,js,ts}', './public/**/*.json'],
    plugins: [PrimeUI],
    theme: {
        extend: {
            backgroundImage: {
                radial: 'radial-gradient(var(--tw-gradient-stops))'
            }
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        }
    }
};

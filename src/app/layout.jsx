import './globals.css';

export const metadata = {
    title: 'Rizki Laksana Putra | Portfolio',
    description: "Rizki Laksana Putra's Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

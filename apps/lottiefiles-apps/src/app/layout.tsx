import './global.css';

export const metadata = {
  title: 'Welcome to lottiefiles-apps',
  description: 'Generated by create-nx-workspace',
};

const Nav = () => {
  return (
    <nav className="p-4 flex gap-2 shadow-xl sticky top-0 bg-white dark:bg-gray-900 z-10">
      <a href="/">Lottie Shop</a>
    </nav>
  );
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

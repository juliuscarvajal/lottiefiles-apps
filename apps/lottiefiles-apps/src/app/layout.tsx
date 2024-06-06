import './global.css';
import type { Metadata, Viewport } from 'next';
import Image from 'next/image';

const APP_NAME = 'Lottie Shop';
const APP_DEFAULT_TITLE = 'Lottie Shop';
const APP_TITLE_TEMPLATE = '%s - PWA App';
const APP_DESCRIPTION = 'Find cool animations. Works offline too...';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

const Nav = () => {
  return (
    <nav className="text-xl px-4 md:px-8 py-4 md:py-8 flex gap-2 shadow-xl sticky top-0 bg-white dark:bg-gray-900 z-10">
      <a href="/" className="flex gap-4 items-center">
        <div>
          <Image
            className="rounded-lg block"
            src="/icons/web/apple-touch-icon.png"
            alt="Lottie Shop"
            width={32}
            height={32}
          />
        </div>
        Lottie Shop
      </a>
    </nav>
  );
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <Nav />
        <main className="px-4 md:px-16 lg:px-32 xl:px-128 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

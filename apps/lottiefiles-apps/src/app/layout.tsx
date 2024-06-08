import './global.css';
import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const APP_NAME = 'Lottie Shop';
const APP_DEFAULT_TITLE = 'Lottie Shop';
const APP_TITLE_TEMPLATE = '%s - with offline support';
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
    <nav className="px-4 md:px-8 py-4 md:py-8 shadow-xl sticky top-0 bg-white dark:bg-gray-900 z-10 flex items-center justify-between lg:justify-normal lg:gap-16">
      <Link href="/" className="flex gap-4 items-center text-xl font-bold">
        <div>
          <Image
            className="rounded-lg block"
            src="/icons/web/apple-touch-icon.png"
            alt="Lottie Shop"
            width={48}
            height={48}
          />
        </div>
        <span className="hidden sm:block">The Lottie Shop</span>
      </Link>
      <div className="flex gap-4 lg:gap-16 items-center font-bold">
        <Link href="/free-animations">Free Animations</Link>
        <Link href="/explore">Explore</Link>
        {/* NOTE: This route only exist on animation click. Hiding it will still allow for prefetch and can make /animation?url=*** work offline */}
        <Link href="/animation" className="w-0 h-0 overflow-hidden">
          Animation
        </Link>
      </div>
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

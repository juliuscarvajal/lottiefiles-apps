import { BackNav } from '@lottiefiles-apps/components';
import { RootLayoutProps } from '../layout';

export default function Layout({ children }: RootLayoutProps) {
  return (
    <div className="space-y-8">
      {children}
      <nav className="w-full flex justify-center">
        <BackNav />
      </nav>
    </div>
  );
}

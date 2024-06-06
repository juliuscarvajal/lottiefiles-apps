import { BackNav } from '@lottiefiles-apps/components';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="space-y-8">
      {children}
      <nav className="w-full flex justify-center">
        <BackNav />
      </nav>
    </div>
  );
}

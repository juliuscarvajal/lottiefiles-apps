import { BackNav } from '@lottiefiles-apps/components';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className="w-full grid">
        <BackNav className="justify-self-end" />
      </nav>
      {children}
    </>
  );
}

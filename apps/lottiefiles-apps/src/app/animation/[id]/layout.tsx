import { BackNav } from 'apps/lottiefiles-apps/src/components/BackNav';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <BackNav />
      {children}
    </>
  );
}

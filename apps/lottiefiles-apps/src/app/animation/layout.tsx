import { BackNav } from '@lottiefiles-apps/components';
import { ComponentPropsWithRef } from 'react';

export default function Layout({ children }: ComponentPropsWithRef<'div'>) {
  return (
    <div className="space-y-8">
      {children}
      <nav className="w-full flex justify-center">
        <BackNav />
      </nav>
    </div>
  );
}

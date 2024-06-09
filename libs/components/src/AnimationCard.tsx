'use client';
import Link from 'next/link';
import { Card, CardProps } from './Card';
import { lazy } from 'react';
const LottiePlayer = lazy(() => import('./LottiePlayer'));

export const AnimationCard = ({
  className = '',
  header,
  body,
  description,
  footer,
  url,
  ...rest
}: CardProps & { url: string }) => {
  return (
    <Link href={`/animation?url=${url}`} shallow prefetch>
      <Card
        className={`rounded-xl flex flex-col justify-between h-full bg-gray-100 dark:bg-gray-700 hover:cursor-pointer ${className}`}
        header={
          <div className="aspect-square grid items-center bg-gray-100 dark:bg-gray-700">
            <LottiePlayer
              preview
              src={url}
              className="bg-gray-100 dark:bg-gray-700"
            />
          </div>
        }
        body={body}
        description={description}
        footer={<div className="p-4 bg-white dark:bg-gray-900">{footer}</div>}
        {...rest}
      />
    </Link>
  );
};

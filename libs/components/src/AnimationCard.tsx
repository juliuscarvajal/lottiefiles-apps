'use client';

import Link from 'next/link';
import { Card, CardProps } from './Card';

export const AnimationCard = ({
  className = '',
  header,
  body,
  description,
  footer,
  url,
  ...rest
}: CardProps & { url: string }) => {
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const searchParams = useSearchParams();

  //   // Get a new searchParams string by merging the current
  //   // searchParams with a provided key/value pair
  //   const createQueryString = useCallback(
  //     (name: string, value: string) => {
  //       const params = new URLSearchParams(searchParams.toString());
  //       params.set(name, value);

  //       return params.toString();
  //     },
  //     [searchParams]
  //   );

  return (
    <Link href={`/animation`}>
      <Card
        className={`rounded-xl flex flex-col justify-between h-full bg-gray-100 dark:bg-gray-700 hover:cursor-pointer ${className}`}
        header={
          <div className="aspect-square grid items-center bg-gray-100 dark:bg-gray-700">
            {header}
          </div>
        }
        body={body}
        description={description}
        footer={<div className="p-4 bg-white dark:bg-gray-900">{footer}</div>}
        onClick={() => {
          // router.push(pathname + '?' + createQueryString('url', url));
          localStorage.setItem('currentAnimationUrl', url);
        }}
        {...rest}
      />
    </Link>
  );
};

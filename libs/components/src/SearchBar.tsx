'use client';

import { Button, Input } from '@headlessui/react';
import { debounce } from 'lodash';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const onQueryStringChanged = debounce((queryString: string) => {
    const params = new URLSearchParams(searchParams);
    if (queryString) {
      params.set('query', queryString);
    } else {
      params.delete('query');
    }
    router.replace(`${pathname}?${params?.toString()}`);
  }, 300);
  return (
    <>
      <Input
        type="search"
        name="search"
        placeholder="Search animations"
        className="dark:bg-gray-700 dark:text-white p-4 rounded-lg w-full border border-gray-900/20"
        onChange={(e) => onQueryStringChanged(e.target.value)}
        defaultValue={searchParams.get('query')?.toString() || ''}
      />
      <Button type="submit" className="bg-primary text-primary px-8 rounded-lg">
        Search
      </Button>
    </>
  );
}

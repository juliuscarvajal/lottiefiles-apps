import Link, { LinkProps } from 'next/link';
import { LottiePlayer } from './LottiePlayer';
import { getFeaturedPublicAnimations } from '@lottiefiles-apps/data';
import { ComponentPropsWithRef } from 'react';

type SearchAnimationData = {
  id: string;
  name: string;
  jsonSource: string;
  lottieSource: string;
  imageSource: string;
};

async function getAnimationsSearchResults() {
  const res = await fetch(
    'https://lottiefiles.com/api/search/get-animations?query=loading+dots&type=all&aep=false&sort=popular&page=1'
  );
  const response = await res.json();
  const data = response?.data?.data;
  return data as SearchAnimationData[];
}

type CardProps = ComponentPropsWithRef<'div'> & {
  header?: JSX.Element;
  body?: JSX.Element;
  description?: JSX.Element;
  footer?: JSX.Element;
};

function Card({
  header,
  body,
  description,
  footer,
  className = '',
}: CardProps) {
  return (
    <div className={`${className}`}>
      {header}
      {body}
      {description}
      {footer}
    </div>
  );
}

function AnimationCard({
  className = '',
  header,
  body,
  description,
  footer,
  linkProps,
}: CardProps & { linkProps: LinkProps }) {
  return (
    <Link className={className} {...linkProps}>
      <Card
        className={`rounded-xl flex flex-col justify-between h-full bg-gray-100 dark:bg-gray-700`}
        header={
          <div className="aspect-square grid items-center bg-gray-100 dark:bg-gray-700">
            {header}
          </div>
        }
        body={body}
        description={description}
        footer={<div className="p-4 bg-white dark:bg-gray-900">{footer}</div>}
      />
    </Link>
  );
}

async function SearchResultAnimationsCards() {
  const data = await getAnimationsSearchResults();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.map((item) => {
        return (
          <AnimationCard
            key={item.id}
            className="dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl"
            linkProps={{ href: `/animation/${item.id}?url=${item.jsonSource}` }}
            header={<LottiePlayer src={item.lottieSource} />}
            footer={<h2>{item.name}</h2>}
          />
        );
      })}
    </>
  );
}

async function PublicAninationsCards() {
  const data = await getFeaturedPublicAnimations();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.map((item) => {
        return (
          <AnimationCard
            key={item.node.id}
            className="dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl"
            linkProps={{
              href: `/animation/${item.node.id}?url=${item.node.jsonUrl}`,
            }}
            header={
              <LottiePlayer
                src={item.node.jsonUrl}
                className="bg-gray-100 dark:bg-gray-700"
              />
            }
            footer={<h2 className="truncate">{item.node.name}</h2>}
          />
        );
      })}
    </>
  );
}

export async function AnimationCards() {
  return (
    <>
      {/* <SearchResultAnimationsCards /> */}
      <PublicAninationsCards />
    </>
  );
}

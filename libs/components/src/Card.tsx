import { ComponentPropsWithRef } from 'react';

export type CardProps = ComponentPropsWithRef<'div'> & {
  header?: JSX.Element;
  body?: JSX.Element;
  description?: JSX.Element;
  footer?: JSX.Element;
};

export function Card({
  header,
  body,
  description,
  footer,
  className = '',
  ...rest
}: CardProps) {
  return (
    <div className={`${className}`} {...rest}>
      {header}
      {body}
      {description}
      {footer}
    </div>
  );
}

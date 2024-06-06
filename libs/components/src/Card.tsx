import { ComponentPropsWithRef, forwardRef } from 'react';

export type CardRef = HTMLDivElement;

export type CardProps = ComponentPropsWithRef<'div'> & {
  header?: JSX.Element;
  body?: JSX.Element;
  description?: JSX.Element;
  footer?: JSX.Element;
};

export const Card = forwardRef<CardRef, CardProps>(
  (
    { header, body, description, footer, className = '', ...rest }: CardProps,
    ref
  ) => {
    return (
      <div ref={ref} className={`${className}`} {...rest}>
        {header}
        {body}
        {description}
        {footer}
      </div>
    );
  }
);

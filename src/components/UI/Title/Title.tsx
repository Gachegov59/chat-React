import { FC, ReactNode } from 'react';

export enum TitleSize {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
}

export type TitleProps = {
  text?: string;
  children?: ReactNode;
  size?: TitleSize;
  className?: string;
};

const Title: FC<TitleProps> = ({ text, children, size = 1, className = '' }) => {
  const TitleTag = `h${size}` as keyof JSX.IntrinsicElements;
  return (
    <TitleTag className={`title-component ${className}`}>
      {text || children}
    </TitleTag>
  );
};

export default Title;

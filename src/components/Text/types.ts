export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  ff?: string;
  fz?: string;
  lh?: string | number;
  fw?: string | number;
  color?: string;
}

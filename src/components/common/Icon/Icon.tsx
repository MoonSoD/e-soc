import { FC } from "react";

interface Props {
  name: string;
  width: number;
  height: number;
  className?: string;
  white?: boolean;
  gray?: boolean;
}

export const Icon: FC<Props> = ({
  name,
  width,
  height,
  className,
  white,
  gray,
}) => {
  return (
    <img
      style={{ filter: white ? "invert(100%)" : gray ? "invert(50%)" : "" }}
      className={className}
      alt={`Ikona ${name}`}
      src={`/icons/coolicons/${name}.svg`}
      width={width}
      height={height}
    />
  );
};

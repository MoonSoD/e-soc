import Link, { LinkProps } from "next/link";
import { FC } from "react";

export const PageLink: FC<LinkProps> = (props) => {
  return <Link {...props}>{props.children}</Link>;
};

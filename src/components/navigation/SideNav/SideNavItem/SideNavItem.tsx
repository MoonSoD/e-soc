import { FC } from "react";
import { Icon, PageLink } from "@components";
import Styled from "./SideNavItem.styled";
import { uiType, useUI } from "@hooks";
import { useRouter } from "next/router";
import classNames from "classnames";

interface Props {
  path: string;
  icon: string;
  label: string;
  expandable?: boolean;
  subLinks?: {
    path: string;
    label: string;
  }[];
}

export const SideNavItem: FC<Props> = (link) => {
  const ui = useUI();
  const router = useRouter();

  const isActive = () => router.pathname === link.path;

  return (
    <li key={link.path}>
      {link?.expandable ? (
        <div onClick={() => ui.toggle(link.path as uiType)}>
          <a>
            <div className={classNames("icon", { active: isActive() })}>
              <Icon white name={link.icon} height={26} width={26} />
            </div>
            <span>{link.label}</span>
          </a>
        </div>
      ) : (
        <PageLink href={link.path}>
          <a>
            <div className={classNames("icon", { active: isActive() })}>
              <Icon white name={link.icon} height={26} width={26} />
            </div>
            <span>{link.label}</span>
          </a>
        </PageLink>
      )}
      {link?.expandable && (
        <Styled.SubLinks isOpen={ui.isOpen(link.path as uiType)}>
          {link?.subLinks?.map((link) => (
            <Styled.SubLink>
              <PageLink href={link.path}>
                <a>
                  <Icon name="chevron-right" width={24} height={24} />
                  {link.label}
                </a>
              </PageLink>
            </Styled.SubLink>
          ))}
        </Styled.SubLinks>
      )}
    </li>
  );
};

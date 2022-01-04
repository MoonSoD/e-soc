import { FC } from "react";
import { Icon } from "@components/common/Icon/Icon";
import Image from "next/image";
import Styled from "./SideNav.styled";
import { PageLink } from "@components/common/PageLink";

const links = [
  {
    icon: "home-alt-fill",
    label: "Domov",
    path: "/",
  },
  {
    icon: "group",
    label: "Klienti",
    path: "/clients",
  },
  {
    icon: "home-plus",
    label: "Izby",
    path: "/rooms",
  },
  {
    icon: "plus-circle-outline",
    label: "Lieky",
    path: "/medication",
  },
  {
    icon: "user-heart",
    label: "Návštevy",
    path: "/visitation",
  },
];

export const SideNav: FC = () => {
  return (
    <Styled.Base open={true}>
      <Styled.Wrapper>
        <div>
          <Styled.Header>
            <Image
              objectFit="cover"
              src="/images/logo.png"
              width={110}
              height={55}
              unoptimized
            />
            <Icon name="menu-alt-05" width={36} height={36} />
          </Styled.Header>
          <Styled.Label>HLAVNÉ MENU</Styled.Label>
          <Styled.List>
            {links.map((link) => (
              <li key={link.path}>
                <PageLink href={link.path}>
                  <a>
                    <div className="icon">
                      <Icon white name={link.icon} height={26} width={26} />
                    </div>
                    <span>{link.label}</span>
                  </a>
                </PageLink>
              </li>
            ))}
          </Styled.List>
        </div>
        <Styled.Profile.Wrapper>
          <Styled.Profile.Picture>J</Styled.Profile.Picture>
          <Styled.Profile.Info>
            <Styled.Profile.Name>
              John Doe
              <a>
                <Icon name="settings-filled" width={24} height={24} />
              </a>
              <a>
                <Icon name="log-out" width={24} height={24} />
              </a>
            </Styled.Profile.Name>
            <Styled.Profile.Role>Riadieľ</Styled.Profile.Role>
          </Styled.Profile.Info>
        </Styled.Profile.Wrapper>
      </Styled.Wrapper>
    </Styled.Base>
  );
};

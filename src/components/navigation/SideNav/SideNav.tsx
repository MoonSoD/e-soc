import { FC } from "react";
import { Icon } from "@components/common/Icon/Icon";
import Image from "next/image";
import Styled from "./SideNav.styled";
import { SideNavItem } from "@components/navigation/SideNav/SideNavItem/SideNavItem";

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
    expandable: true,
    subLinks: [
      {
        label: "Zoznam klientov",
        path: "/clients",
      },
    ],
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
    expandable: true,
    subLinks: [
      {
        label: "Zoznam liekov",
        path: "/medication",
      },
      {
        label: "Kalendár liekov",
        path: "/medication/calendar",
      },
    ],
  },
  /*  {
    icon: "user-heart",
    label: "Návštevy",
    path: "/visitation",
  },*/
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
              <SideNavItem {...link} />
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
            <Styled.Profile.Role>Riaditeľ</Styled.Profile.Role>
          </Styled.Profile.Info>
        </Styled.Profile.Wrapper>
      </Styled.Wrapper>
    </Styled.Base>
  );
};

import { FC } from "react";
import { Icon, ProfilePill, SideNavItem } from "@components";
import Image from "next/image";
import Styled from "./SideNav.styled";

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
        <ProfilePill name="John Doe" role="Riaditeľ" showActions />
      </Styled.Wrapper>
    </Styled.Base>
  );
};

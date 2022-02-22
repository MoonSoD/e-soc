import { FC } from "react";
import { Icon, ProfilePill, SideNavItem } from "@components";
import Image from "next/image";
import Styled from "./SideNav.styled";
import useSWR from "swr";
import { getSelf } from "@services";
import { useSession } from "next-auth/react";

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
    icon: "calendar-event",
    label: "Návštevy",
    path: "/visitations",
    expandable: true,
    subLinks: [
      {
        label: "Zoznam návštev",
        path: "/visitations",
      },
      {
        label: "Kalendár návštev",
        path: "/",
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
  const session = useSession();
  const isAuthed = session.status === "authenticated";

  const userRequest = useSWR(isAuthed ? "/personel/self" : null, () =>
    getSelf(session.data?.accessToken),
  );

  const userData = userRequest?.data;
  const roles = { 1: "Opatrovateľ", 2: "Riaditeľ" };

  const userRole = () => {
    const role = userData?.role as keyof typeof roles;
    return roles?.[role];
  };

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
          </Styled.Header>
          <Styled.Label>HLAVNÉ MENU</Styled.Label>
          <Styled.List>
            {links.map((link) => (
              <SideNavItem {...link} />
            ))}
          </Styled.List>
        </div>
        <ProfilePill
          name={
            isAuthed && userData
              ? `${userData?.name} ${userData?.surname}`
              : "..."
          }
          role={isAuthed && userData ? userRole() : "..."}
        />
      </Styled.Wrapper>
    </Styled.Base>
  );
};

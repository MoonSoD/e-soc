import { FC } from "react";
import Styled from "./ProfilePill.styled";
import { Icon } from "@components";

interface Props {
  showActions?: boolean;
  name: string;
  role: string | number;
}

export const ProfilePill: FC<Props> = ({ showActions, name, role }) => {
  return (
    <Styled.Profile.Wrapper>
      <Styled.Profile.Picture>
        {name.charAt(0).toUpperCase()}
      </Styled.Profile.Picture>
      <Styled.Profile.Info>
        <Styled.Profile.Name>{name}</Styled.Profile.Name>
        <Styled.Profile.Role>
          {role}{" "}
          {showActions && (
            <>
              <a>
                <Icon name="settings-filled" width={24} height={24} />
              </a>
              <a>
                <Icon name="log-out" width={24} height={24} />
              </a>
            </>
          )}
        </Styled.Profile.Role>
      </Styled.Profile.Info>
    </Styled.Profile.Wrapper>
  );
};

import { Outlet } from "react-router-dom";

import { ProfileHeader } from "../components/ProfileHeader";
import { Feed } from "../components/Feed";
import { Background } from "../components/Background";

export function Profile() {
  return(
    <Background>
      <Feed>
        <ProfileHeader />
        <Outlet />
      </Feed>
    </Background>
  )
}
import { Outlet } from "react-router-dom";
import { ProfileHeader } from "../components/ProfileHeader";


export function Profile() {
  return(
    <>
      <div className="text-2xl bg-emerald-600 w-5/6 md:w-3/4  h-full">
        <ProfileHeader />
        
        <Outlet />
      </div>
    </>
  )
}
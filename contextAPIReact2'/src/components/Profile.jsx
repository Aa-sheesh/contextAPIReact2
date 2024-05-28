import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if(!user){
    return <h2 className="text-3xl">No user logged in</h2>
  }
  return (
    <>
      <div>
        <h2 className="text-3xl">Profile : {user.username}</h2>
      </div>
    </>
  );
}

export default Profile;

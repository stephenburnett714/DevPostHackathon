import React from 'react';
import '../CSS/profile.css';

export default function Profile() {
  const userData = {
    profilePicture: 'src/assets/img/Frame 51.png',
    profileName: 'Samantha Miller',
    profileAge: 'October 2019',
    profileStatus: 'Wife of an active duty Marine',
    profileFb: '#',
    profileTt: '#',
    profileLocation: 'Phoenix, AZ',
    profileActivity: 100,
    profileGroups: 22,
    profileInterests: 34,
  };

  return (
    <div className="py-20">
      {/*Profile Information*/}
      <div
        class="Profile"
        className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:pr-10 pb-10 sm:pb-20"
      >
        <img src={userData.profilePicture}></img>
        {/*Right Content*/}
        <div className="inter-font flex flex-col gap-4 items-center sm:items-start">
          <span className="text-4xl font-extrabold leading-10 tracking-tight">
            {userData.profileName}
          </span>
          <span className="text-lg font-bold leading-16 tracking-tight">
            Member since {userData.profileAge}
          </span>
          <span className="text-base font-normal leading-16 tracking-tight">
            {userData.profileStatus}
          </span>

          {/*Bottom-Right Content*/}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <div className="flex flex-row items-center gap-5">
              <img src="src/assets/img/cib-facebook.svg" alt="Facebook" />
              <img src="src/assets/img/cib-twitter.svg" alt="Twitter" />
            </div>
            <div className="flex flex-start gap-2">
              <img src="src/assets/img/cil-location-pin.svg" alt="Pin" />
              <span>{userData.profileLocation}</span>
            </div>
            <div className="flex flex-start gap-2">
              <img src="src/assets/img/cil-happy.svg" alt="Smile" />
              <span>Attended {userData.profileActivity} events</span>
            </div>
          </div>
        </div>
      </div>

      {/*Sign-In ID.me and Edit Profile*/}
      <div className="inter-font flex flex-col sm:flex-row justify-between items-center sm:px-32">
        <div className="flex flex-start order-2 sm:order-1 gap-4">
          <div className="flex gap-2">
            <span className="ww-blue-bg px-2 py-1 border rounded-full text-white text-xs">
              {userData.profileGroups}
            </span>
            <span>Groups</span>
          </div>

          <div className="flex gap-2">
            <span className="ww-blue-bg px-2 py-1 border rounded-full text-white text-xs">
              {userData.profileInterests}
            </span>
            <span>Interests</span>
          </div>
        </div>
        <div className="flex flex-start order-1 sm:order-2 gap-4 flex-col sm:flex-row">
          <img
            src="src/assets/img/signin 1.svg"
            alt="Signin ID"
            className="order-2 sm:order-1"
          />
          <button className="order-1 sm:order-2">Edit Profile</button>
        </div>
      </div>

      {/*Profile Groups*/}
      <div class="Groups" className="inter-font">
        This will be groups part
      </div>

      {/*Profile Interests*/}
      <div class="Interests" className="inter-font">
        This will be interests part
      </div>
    </div>
  );
}

import React from 'react';
import '../CSS/profile.css';
import { groupsData } from '../assets/data/groups';
import { useMediaQuery } from 'react-responsive';

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

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  const maxGroupsToShow = isDesktopOrLaptop ? 12 : 8;

  return (
    <div className="py-20">
      {/*Profile Information*/}
      <div
        class="Profile"
        className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:pr-10 pb-10 lg:pb-20"
      >
        <img src={userData.profilePicture}></img>
        {/*Right Content*/}
        <div className="inter-font flex flex-col gap-5 items-center sm:items-start">
          <span className="text-4xl font-extrabold leading-10 tracking-tight">
            {userData.profileName}
          </span>
          <span className="text-lg font-bold  tracking-normal">
            Member since {userData.profileAge}
          </span>
          <span className="text-base font-normal leading-16 tracking-tight">
            {userData.profileStatus}
          </span>

          {/*Bottom-Right Content*/}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-row items-center gap-5 cursor-pointer">
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
      <div className="inter-font flex flex-col sm:flex-row justify-between items-center px-10 lg:px-48">
        <div className="flex flex-start order-2 sm:order-1 gap-4 py-20 sm:py-0">
          <div className="flex gap-2 ">
            <span className="ww-blue-bg px-2 py-1 border rounded-full text-white text-xs">
              {userData.profileGroups}
            </span>
            <span className="font-medium">Groups</span>
          </div>

          <div className="flex gap-2">
            <span className="ww-blue-bg px-2 py-1 border rounded-full text-white text-xs">
              {userData.profileInterests}
            </span>
            <span className="font-medium">Interests</span>
          </div>
        </div>
        <div className="flex flex-start order-1 sm:order-2 gap-4 flex-col sm:flex-row cursor-pointer">
          <img
            src="src/assets/img/signin 1.svg"
            alt="Signin ID"
            className="order-2 sm:order-1"
          />
          <button className="ww-gray order-1 sm:order-2 border border-gray-400 font-semibold px-5 py-2  rounded-md">
            Edit Profile
          </button>
        </div>
      </div>

      {/*Profile Groups*/}
      <div class="Groups" className="inter-font pt-10 lg:pt-32 px-10 lg:px-40">
        <span className="text-4xl font-extrabold leading-10 tracking-tight ">
          Groups
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-4 py-14">
          {groupsData.slice(0, maxGroupsToShow).map((group) => (
            <div
              key={group.id}
              className="w-full border rounded-lg flex justify-between items-center cursor-pointer pb-1"
            >
              {/* Display Group Name */}
              <span className="w-48 font-bold flex flex-col flex-start pl-4 leading-tight">
                {group.name}
              </span>

              {/* Display Square Image */}
              <div className=" bg-blue-500 border">
                <img src={group.imageUrl}></img>
              </div>
              {/* Adjust the styles and content for the actual image */}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-sm border border-gray-400 rounded-lg px-2 py-1">
            See more groups
          </button>
        </div>
      </div>

      {/*Profile Interests*/}
      <div class="Interests" className="inter-font">
        This will be interests part
      </div>
    </div>
  );
}

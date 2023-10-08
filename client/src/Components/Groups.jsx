
import React from 'react';
import { AllGroups } from '../assets/data/groupsevents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faMap, faUser } from '@fortawesome/free-solid-svg-icons';


export default function Groups() {
  const myGroups = AllGroups.groups.slice(0, 3);
  const everyGroup = AllGroups.groups.slice(3, 14);
  return (
    <div className='mx-8 my-8'>
      {/* My Groups */}
      <div><div>My Groups</div></div>

      {/* All Groups */}
      <div className='inter-font text-xl'>All Groups</div>
      <div className='flex flex-wrap'>
        {everyGroup.map((group) => (
          <div
            key={group.group_name}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col justify-between"
          >
            <div>
              <img
                className="rounded"
                src={group.image}
                alt={group.group_name}
                load="lazy"
              />
              <div className="text-[14px] text-left inter-font">
                {group.group_name}
              </div>
              <div className='inter-font text-[10px]'><FontAwesomeIcon icon={faUser} color="#64025F"/> {group.leaders_name}</div>
              <div className='inter-font text-[10px] pb-2'><FontAwesomeIcon icon={faMap} color="#64025F"/> {group.location}</div>
            </div>
            <div className=' text-center'>
              <div className="text-[10px] text-left inter-font">
                {group.description}
              </div>
              <div className='text-base ww-background-purple rounded text-white  px-2 my-2 cursor-pointer inter-font'>Join Group <FontAwesomeIcon icon={faCirclePlus} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
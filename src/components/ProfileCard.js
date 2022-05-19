import React from 'react'
import { useHistory } from 'react-router-dom'

const ProfileCard = ({ profile }) => {
  const router = useHistory();
  const gotoProfile = (profile) => {
    console.log(profile);
    router.push(`/${profile.id}/${profile.age}`);
  }
  return (
    <div className='rounded-lg bg-white p-3 shadow-md w-auto'>
      <div>
        <div className='h-[150px] w-[150px] m-auto'>
          <img alt='profile' src={profile.avatar} className="rounded-lg object-cover w-full h-full" />
        </div>
        <button onClick={() => gotoProfile(profile)} className='py-3 w-full mt-1 flex justify-center items-center px-3 bg-black outline-none hover:outline-none hover:font-bold transition text-white rounded-md'>View Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
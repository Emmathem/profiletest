import React from 'react'

const ProfileCard = ({ profile }) => {
  return (
    <div className='rounded-lg bg-white p-3 shadow-md w-auto'>
      <div>
        <div className='h-[150px] w-[150px]'>
          <img alt='profile' src={profile.avatar} className="rounded-lg object-cover w-full h-full" />
        </div>
        <button className='py-3 w-full mt-1 flex justify-center items-center px-3 bg-black outline-none hover:outline-none hover:font-bold transition text-white rounded-md'>View Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
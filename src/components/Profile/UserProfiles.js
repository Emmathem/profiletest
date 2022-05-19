import React, { useEffect, useState } from 'react';
import ProfileCard from '../ProfileCard';
import axios from 'axios';

const UserProfiles = () => {

  const baseUrl = 'https://reqres.in';

  const [allProfile, setAllProfile] = useState([])


  useEffect(() => {
    const getAllUser = async () => {
      const response = await axios.get(`${baseUrl}/api/users`);
      if (response.status === 200) {
        const { data } = response.data
        console.log('data', data);
        setAllProfile(data)
      }
    }
    getAllUser();
  }, []);

  console.log(allProfile);

  return (
    <div className='flex m-auto border items-center rounded-md p-4 transition'>
      <div className="grid md:gap-x-8 md:gap-y-6 md:grid-cols-5 gap-6 grid-cols-1">
        {allProfile && allProfile.map((profile, index) => {
          return (
            <ProfileCard key={index} profile={profile} />
          )
        })}
      </div>
    </div>
  )
}

export default UserProfiles
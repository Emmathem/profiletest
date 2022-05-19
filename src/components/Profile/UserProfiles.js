import React, { useEffect, useState } from 'react';
import ProfileCard from '../ProfileCard';
import axios from 'axios';

const UserProfiles = () => {

  const baseUrl = 'https://reqres.in';

  const [allProfile, setAllProfile] = useState([])

  function randomNumber() {
    return Math.floor(Math.random() * 90 + 10);
  }


  useEffect(() => {
    const getAllUser = async () => {
      const response = await axios.get(`${baseUrl}/api/users`);
      if (response.status === 200) {
        const { data } = response.data
        const newData = data.map((res) => {
          return {
            ...res,
            age: randomNumber()
          }
        })
        console.log('data', newData);
        setAllProfile(newData)
      }
    }
    getAllUser();
  }, []);

  console.log(allProfile);

  return (
    <>     
    <div className='m-auto lg:w-auto w-3/4 border dark:border-[#ccc] items-center rounded-md p-4 transition'>
      <p className='flex justify-center py-5 text-white text-3xl font-bold'>All Users</p>
        <div className="grid md:gap-x-8 md:gap-y-6 md:grid-cols-5 gap-6 grid-cols-1">
          {allProfile && allProfile.map((profile, index) => {
            return (
              <ProfileCard key={index} profile={profile} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default UserProfiles
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProfileDetails = () => {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const baseUrl = 'https://reqres.in';
    const { id, age } = useParams()

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            const response = await axios.get(`${baseUrl}/api/users/${id}`);
            if (response.status === 200) {
                const { data } = response.data;
                setDetails(data);
                setTimeout(() => {
                    setLoading(false)
                }, 300)
            } else {
                setLoading(false);
            }
        };
        fetchDetails();
        // eslint-disable-next-line
    }, [])

    return (
        <div className='m-auto border dark:border-gray-100 items-center rounded-md p-4 transition'>
            <span className='text-white cursor-pointer font-bold'><Link to="/">Go Back</Link></span>
            <p className='flex justify-center py-5 text-white text-3xl font-bold'>Profile Details</p>
            {loading ? (
                <div>Fetching...</div>
            ) : (
                <div className="grid md:gap-x-8 md:gap-y-6 md:grid-cols-2 gap-6 grid-cols-1">
                    <div className='lg:w-[400px] lg:h-[400px] m-auto w-[350px]'>
                        <img src={details.avatar} alt="prile pic" className="rounded-lg object-cover w-full h-full" />
                    </div>
                    <div className='bg-white p-4'>
                        <div className='pb-3'>First Name: {details.first_name}</div>
                        <div className='pb-3'>Last Name:  {details.last_name}</div>
                        <div className='pb-3'>Email: {details.email}</div>
                        <div>Age: <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1'>{age} years</span></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileDetails
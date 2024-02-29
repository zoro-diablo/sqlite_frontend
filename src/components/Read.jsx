import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Read = () => {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/user/${id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className='relative bg-white w-[50%] mx-auto block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8'>
      <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

      <div className='sm:flex sm:justify-between sm:gap-4'>
        <div>
          <h3 className='text-lg font-bold text-gray-900 sm:text-xl'>
            {user.name}
          </h3>

          <p className='mt-1 text-xs font-medium text-gray-600'>{user.email}</p>
        </div>

        <div className='hidden sm:block sm:shrink-0'>
          <img
            alt={user.name}
            src={user.avatar}
            className='size-16 rounded-lg object-cover shadow-sm'
          />
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-pretty text-sm text-gray-500'>
          The user is a {user.role} and is part of the {user.team} team.
        </p>
      </div>

      <dl className='mt-6 flex gap-4 sm:gap-6'>
        <div className='flex flex-col-reverse'>
          <dd className='text-xs text-gray-500'>Status</dd>
          <dt className='text-sm font-medium text-gray-600'>{user.status}</dt>
        </div>

        <div className='flex flex-col-reverse'>
          <dd className='text-xs text-gray-500'>Rank</dd>
          <dt className='text-sm font-medium text-gray-600'># {user.id}</dt>
        </div>
      </dl>
    </div>
  );
};
export default Read;

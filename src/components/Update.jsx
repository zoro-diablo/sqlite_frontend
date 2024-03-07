import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Input,
} from '@nextui-org/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [team, setTeam] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/user/${id}`)
      .then((res) => {
        setName(res.data.data.name);
        setEmail(res.data.data.email);
        setRole(res.data.data.role);
        setTeam(res.data.data.team);
        setStatus(res.data.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      name,
      email,
      role,
      team,
      status,
    };

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/user/${id}`,
        updatedUser
      );
      navigate('/');
      toast.warn('User is Edited!', {
        position: "bottom-right",
        closeButton: true,
        theme: "dark",
        });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full flex justify-center'>
      <form onSubmit={handleSubmit}>
        <Card className='min-w-[500px]'>
          <CardHeader className='flex gap-3'>
            <Image
              alt='nextui logo'
              height={40}
              radius='sm'
              src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
              width={40}
            />
            <div className='flex flex-col'>
              <p className='text-md'>Update Form</p>
              <p className='text-small text-default-500'>
                Update the below Details
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className='grid gap-3'>
              <Input
                type='text'
                variant='flat'
                label='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type='email'
                variant='flat'
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <select
                label='Select a role'
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className='bg-[#f4f4f5] py-4  border-none outline-none rounded-lg px-3 cursor-pointer hover:bg-blue-100 focus:bg-blue-100 '
              >
                <option value='SuperAdmin'>SuperAdmin</option>
                <option value='Admin'>Admin</option>
                <option value='User'>User</option>
                <option value='Guest'>Guest</option>
              </select>
            </div>
            <div className='grid gap-3 my-4'>
              <select
                label='Select an Team'
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                className='bg-[#f4f4f5] py-4  border-none outline-none rounded-lg px-3 cursor-pointer hover:bg-blue-100 focus:bg-blue-100 '
              >
                <option value='Frontend'>Frontend</option>
                <option value='Backend'>Backend</option>
                <option value='DevOps'>DevOps</option>
                <option value='Design'>Design</option>
              </select>
              <select
                label='Status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className='bg-[#f4f4f5] py-4  border-none outline-none rounded-lg px-3 cursor-pointer hover:bg-blue-100 focus:bg-blue-100 '
              >
                <option value='active'>Active</option>
                <option value='paused'>Paused</option>
                <option value='vacation'>Vacation</option>
              </select>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className='flex justify-end w-full'>
              <Button type='submit' color='primary' variant='shadow'>
                Submit
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};
export default Update;

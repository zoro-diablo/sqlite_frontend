import {
  Navbar,
  NavbarBrand,
 
} from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <Navbar position='static' className='rounded-md'>
        <NavbarBrand className='flex justify-center'>
          <p className='font-bold text-inherit text-lg'><Link to='/'>Dashboard</Link></p>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

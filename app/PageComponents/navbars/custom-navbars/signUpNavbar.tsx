import React from 'react'
import Image from 'next/image'
import logo from '../asset/bingo_logo.png'
import user from '../asset/user.png'
import Navbar from '../Navbar'
import { Menu } from 'lucide-react'
import CustomButton from '@/components/guides/buttons/custombutton'

type PageProps = {
  onLogin: () => void;
  handleHowToPlayClick: () => void;
  handleShowMenu: () => void;
}

const SignUpNavbar = ({ onLogin, handleHowToPlayClick, handleShowMenu }: PageProps) => {

  return (
    <Navbar className='justify-between'>
      <div className='flex md:hidden'>
        <Image src={user} alt='user' />
      </div>
      <div>
        <Image className='w-[131px] h-[46.48px]' src={logo} alt='Remote Bingo' />
      </div>
      <div className='flex gap-6 items-center'>
        <p onClick={() => handleHowToPlayClick()} className='text-textColor-main cursor-pointer hidden md:flex'>How to play</p>
        <CustomButton variant='default' onClick={() => onLogin()} className='bg-primary-yellow hidden md:flex shadow-custom-inset px-4 py-2 rounded-[8px] text-white'>Login</CustomButton>
        <CustomButton variant='secondary' onClick={() => handleShowMenu()} className='bg-primary-700 flex md:hidden shadow-custom-inset px-4 py-[10px] rounded-[8px] text-white'>
          <Menu />
        </CustomButton>
      </div>
    </Navbar>
  )
}



export default SignUpNavbar
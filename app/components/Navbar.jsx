import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav>
            <a href="">
                <Image src={assets.logo} className='w-28 cursor-pointer mr-14'/>
            </a>

            <ul>
                <li><a href="#top">Home</a></li>    
                <li><a href="#about">Sobre mim</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#work">Trabalho</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>

            <div>
                <a href="#contact">Contato <Image src={assets.arrow_icon} className='w-3'/></a>
            </div>
        </nav>
    </>
  )
}

export default Navbar

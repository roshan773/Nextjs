import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-gray-800'>
        <div className='container mx-auto text-white flex justify-between'>
            <Link href={"/"}>
                <Image src="/image/logo.png" alt="" height={40} width={60}/>
            </Link>
            <ul className='flex pt-5'>
                <li className='pr-5 font-bold'><Link href={"/"}>HOME</Link></li>
                <li className='pr-5 font-bold'><Link href={"/about"}>ABOUT</Link></li>
                <li className='pr-5 font-bold'><Link href={"/product"}>PRODUCT</Link></li>
                <li className='pr-5 font-bold'>SERVICE</li>
                <li className='pr-5 font-bold'><Link href={"/contact"}>CONTACT</Link></li>
            </ul>
            <button>LOGIN</button>
        </div>
    </div>
  )
}

export default Navbar
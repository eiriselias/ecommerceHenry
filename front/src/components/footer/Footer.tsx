import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center gap-4'>
        <a className='hover:scale-110 transition-all' href="https://www.facebook.com/eiriselias" target='_blank' > 
          <Image src="/facebook.svg" width={40} height={40} alt='icoFacebook'/>
        </a>
        <a className='hover:scale-110 transition-all' href="https://www.linkedin.com/in/eiriselias" target='_blank'> 
          <Image src="/linkeding.svg" width={40} height={40} alt='icolinkeding'/>
        </a>
        <a className='hover:scale-110 transition-all' href="https://www.github.com/eiriselias" target='_blank'> 
          <Image src="/github.svg" width={40} height={40} alt='icogithub'/>
        </a>
        <a className='hover:scale-110 transition-all' href="http://wa.link/druamt" target='_blank'> 
          <Image src="/whatsapp.svg" width={40} height={40} alt='icowhatsapp'/>
        </a>
      </div>
      <div className='flex mb-8 justify-center'>
        <span>Eiris Salazar Developer - 2024 ©</span>
      </div>
    </div>
    
  )
}

export default Footer

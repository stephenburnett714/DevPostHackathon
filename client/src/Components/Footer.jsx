import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/footer-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
  const logoUrl = 'https://www.figma.com/adf4b452-dd4b-43e9-8e63-f3b49b25425e'
  return (
    <div className=' bg-slate-200 m-0 py-[48px] fixed bottom-0 w-full h-[auto] flex flex-col justify-center items-center'>
      <div id="logo" className='pt-3 pb-[24px]'>
        <img src={footerLogo} className='scale-75' />
      </div>
      <div id="links" className='pb-[48px] flex justify-center gap-[24px]'>
        <Link>Overview</Link>
        <Link>Teams</Link>
        <Link>Jobs</Link>
        <Link>Help</Link>
        <Link>Privacy</Link>
      </div>
      <div id="social-contact" className='p-5 flex gap-[24px]'>
        <FontAwesomeIcon icon={faInstagram} className='text-neutral-400'/>
        <FontAwesomeIcon icon={faTwitter} className='text-neutral-400'/>
        <FontAwesomeIcon icon={faInstagram} className='text-neutral-400' />
        <FontAwesomeIcon icon={faLinkedin} className='text-neutral-400' />
      </div>
    </div>
  )
}

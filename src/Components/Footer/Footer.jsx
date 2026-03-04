import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className='bg-neutral text-neutral-content px-16 py-12'>
      
      <div className='flex justify-between gap-8 mb-10'>
        
        {/* Brand */}
        <div className='max-w-[280px]'>
          <h2 className='text-white font-bold text-xl mb-3'>CS — Ticket System</h2>
          <p className='text-sm text-gray-400'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-semibold mb-1'>Company</h3>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer'>About Us</a>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer'>Our Mission</a>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer'>Contact Sales</a>
        </div>

        {/* Services */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-semibold mb-1'>Services</h3>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer'>Products & Services</a>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer'>Customer Stories</a>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer'>Download Apps</a>
        </div>

        {/* Information */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-semibold mb-1'>Information</h3>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer'>Privacy Policy</a>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer'>Terms & Conditions</a>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer'>Join Us</a>
        </div>

        {/* Social Links */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-semibold mb-1'>Social Links</h3>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer flex items-center gap-2'>
            <FaXTwitter /> @CS — Ticket System
          </a>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer flex items-center gap-2'>
            <FaLinkedin /> @CS — Ticket System
          </a>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer flex items-center gap-2'>
            <FaFacebook /> @CS — Ticket System
          </a>
          <a className='text-gray-400 text-sm hover:text-white cursor-pointer flex items-center gap-2'>
            <MdEmail /> support@cst.com
          </a>
        </div>

      </div>

      {/* Divider */}
      <hr className='border-gray-700 mb-6' />

      {/* Bottom */}
      <p className='text-center text-gray-400 text-sm'>
        © 2025 CS — Ticket System. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
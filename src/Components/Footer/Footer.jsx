import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className='bg-neutral text-neutral-content px-16 py-12'>
      
      <div className='flex justify-between gap-8 mb-10'>
        <div className='max-w-[280px]'>
          <h2 className='text-white font-bold text-xl mb-3'>CS — Ticket System</h2>
          <p className='text-sm text-gray-400'>
            CS — Ticket System is your all-in-one customer support platform. 
            Effortlessly track, prioritize, and resolve tickets while keeping 
            your team aligned and your customers happy.
          </p>
        </div>

      
        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-semibold mb-1'>Company</h3>
          <a className='text-gray-400 text-sm hover:text-white '>About Us</a>
          <a className='text-gray-400 text-sm hover:text-white '>Our Mission</a>
          <a className='text-gray-400 text-sm hover:text-white '>Contact Sales</a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-semibold mb-1'>Services</h3>
          <a className='text-gray-400 text-sm hover:text-white '>Products & Services</a>
          <a className='text-gray-400 text-sm hover:text-white '>Customer Stories</a>
          <a className='text-gray-400 text-sm hover:text-white '>Download Apps</a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-semibold mb-1'>Information</h3>
          <a className='text-gray-400 text-sm hover:text-white '>Privacy Policy</a>
          <a className='text-gray-400 text-sm hover:text-white'>Terms & Conditions</a>
          <a className='text-gray-400 text-sm hover:text-white'>Join Us</a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-semibold mb-1'>Social Links</h3>
          <a className='text-gray-400 text-sm hover:text-white  flex items-center gap-2'>
            <FaXTwitter /> @CS — Ticket System
          </a>
          <a className='text-gray-400 text-sm hover:text-white  flex items-center gap-2'>
            <FaLinkedin /> @CS — Ticket System
          </a>
          <a className='text-gray-400 text-sm hover:text-white  flex items-center gap-2'>
            <FaFacebook /> @CS — Ticket System
          </a>
          <a className='text-gray-400 text-sm hover:text-white  flex items-center gap-2'>
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
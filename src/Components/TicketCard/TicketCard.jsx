import React from 'react';
import { AiFillCalendar } from "react-icons/ai";


function TicketCard({ticket,handleTicket}) {


 return (
              <div onClick={()=>handleTicket(ticket)} className='bg-base-100 rounded-2xl shadow-lg p-4 sm:w-full'>
  <div className='flex flex-col lg:flex-row justify-between items-center mb-2'>
    <h1 className='text-lg font-bold text-gray-800'>{ticket.title}</h1>
    <button className={`text-xs font-semibold sm:p-1 lg:px-3 lg:py-1 rounded-full
        ${ticket.status === "Open" ? "bg-green-100 text-green-700" :
          ticket.status === "In-Progress" ? "bg-yellow-100 text-yellow-700" :
          "bg-blue-100 text-blue-700"}`}>
      ● {ticket.status}
    </button>
  </div>

  <p className='text-sm text-gray-500 line-clamp-2 mb-3'>
    {ticket.description}
  </p>

  <hr className='mb-3' />

  <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center text-xs text-gray-500'>
    <span className='font-semibold text-purple-500'>#{ticket.id}</span>
    <span className={`font-semibold px-3 py-1 rounded-full
        ${ticket.priority === "HighPriority" ?  "text-red-500" :
          ticket.priority === "MediumPriority" ? " text-yellow-500" :
          " text-green-700"}`}>●{ticket.priority}</span>
    <span>👤 {ticket.customer}</span>
    <span className='flex items-center gap-1'>
      <AiFillCalendar /> {ticket.createdAt}
    </span>
  </div>

</div>
    );
}

export default TicketCard;
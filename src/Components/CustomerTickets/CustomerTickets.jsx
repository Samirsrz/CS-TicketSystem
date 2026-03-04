import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';




function CustomerTickets({ticketPromise,handleTicket,isResolved}) {

 
 const ticketsData = use(ticketPromise);
 const mainTicket = ticketsData.filter(ticket => !isResolved.find(t => t.id === ticket.id)) 
    return (
        <div className='sm:w-full'>
            <h2 className='text-2xl font-bold mb-4'>Customer Tickets</h2> 
        <div className='grid sm:w-full grid-cols-1 lg:grid-cols-2 gap-2.5'>
        {
          mainTicket.map(ticket => (
            <TicketCard handleTicket={handleTicket} key={ticket.id} ticket={ticket} />

          ))
          
          }
      </div>
       

    
  </div>
    );
}

export default CustomerTickets;
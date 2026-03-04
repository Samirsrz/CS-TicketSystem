import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';




function CustomerTickets({inProgress,ticketPromise,handleTicket,isResolved}) {

 
 const ticketsData = use(ticketPromise);

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Customer Tickets</h2> 
        <div className='grid grid-cols-2 gap-2.5'>
        {
          ticketsData
          .filter(ticket => !inProgress.find(t => t.id === ticket.id) || !isResolved.find(t=>t.id===ticket.id))
          .map(ticket => (
            <TicketCard handleTicket={handleTicket} key={ticket.id} ticket={ticket} />

          ))
          
          }
      </div>
       

    
  </div>
    );
}

export default CustomerTickets;
import { Suspense, useState } from "react"
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets"
import Navbar from "./Components/Navbar/Navbar"
import TaskStatus from "./Components/TaskStatus/TaskStatus"
import bg from "./assets/bg.png"

const fetchTickets=async()=>{
    const res = await fetch("/tickets.json")
    return res.json()
}
const ticketPromise=fetchTickets()



function App() {


  const [inProgress,setInProgress] = useState([])
  const [isResolved,setIsResolved] = useState([])

 const handleTicket=(ticket)=>{
   setInProgress([...inProgress,ticket])
 }

 const handleResolved=(ticket)=>{
   setInProgress(inProgress.filter(t=>t.id!==ticket.id))
   
   setIsResolved([...isResolved,ticket])
   console.log('this is resolved button',isResolved);
 }



  return (
    <div>
     <Navbar></Navbar>
<div className="w-full flex gap-2">
  <div
    className="w-[710px] relative rounded-lg h-[250px] flex flex-col items-center justify-center text-white overflow-hidden"
    style={{ background: "linear-gradient(to right, #632EE3, #9F62F2)" }}
  >
    <img src={bg} className="absolute left-0 top-0 w-1/2 opacity-60" />
    <img src={bg} className="absolute right-0 top-0 w-1/2 opacity-60 scale-x-[-1]" />
    <img src={bg} className="absolute left-0 bottom-0 w-1/2 opacity-60 scale-y-[-1]" />
    <img src={bg} className="absolute right-0 bottom-0 w-1/2 opacity-60 rotate-180" />
    <p className="relative z-10 text-lg font-medium">In-Progress</p>
    <h1 className="relative z-10 text-5xl font-bold">{inProgress.length}</h1>
  </div>

  <div
    className="w-[710px] relative rounded-lg h-[250px] flex flex-col items-center justify-center text-white overflow-hidden"
    style={{ background: "linear-gradient(to right, #54CF68, #00827A)" }}
  >
    <img src={bg} className="absolute left-0 top-0 w-1/2 opacity-60" />
    <img src={bg} className="absolute right-0 top-0 w-1/2 opacity-60 scale-x-[-1]" />
    <img src={bg} className="absolute left-0 bottom-0 w-1/2 opacity-60 scale-y-[-1]" />
    <img src={bg} className="absolute right-0 bottom-0 w-1/2 opacity-60 rotate-180" />
    <p className="relative z-10 text-lg font-medium">Resolved</p>
    <h1 className="relative z-10 text-5xl font-bold">{isResolved.length}</h1>
  </div>
</div>


<div className="flex gap-8 w-full p-4">
  <div className="w-[75%] ">
   <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
    <CustomerTickets inProgress={inProgress} handleTicket={handleTicket} ticketPromise={ticketPromise}></CustomerTickets>
   </Suspense>
  </div>
  <div className="w-[25%]">
 <TaskStatus isResolved={isResolved} handleResolved={handleResolved} inProgress={inProgress}></TaskStatus>
  </div>
</div>
   
     
    </div>
  )
}

export default App

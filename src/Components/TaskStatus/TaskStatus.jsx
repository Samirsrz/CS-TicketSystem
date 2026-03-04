import React from 'react';

function TaskStatus({isResolved,inProgress,handleResolved}) {
      return (
    <div className='w-full flex flex-col gap-11 p-2.5'>
      <div>
        <h1 className='text-2xl font-bold'>Task Status ({inProgress.length})</h1>
        <div className='p-3.5 w-full flex flex-col gap-2'>
          {
           inProgress.length === 0? <h3 className='text-gray-400 text-sm font-semibold'>Select a ticket to add to task status</h3>
           
            : 
            
            inProgress.map(t => (
                <div key={t.id} className='bg-base-300 p-2 rounded-lg'>
                  <p className='text-sm font-semibold mb-2'>{t.title}</p>
                  <button
                    onClick={() => handleResolved(t)}
                    className='btn w-full text-white p-1 font-bold rounded-lg bg-gradient-to-r from-[#00827A] to-[#54CF68]'>
                    Completed
                  </button>
                </div>
              ))
          }
        </div>
      </div>

      <div>
        <h1 className='text-2xl font-bold'>Resolved Task ({isResolved.length})</h1>
           <div className='p-3.5 w-full flex flex-col gap-2'>
          {
           isResolved.length === 0? <h3 className='text-gray-400 text-sm font-semibold'>No resolved tasks yet</h3>
           
            : 
            
            isResolved.map(t => (
                <div key={t.id} className='bg-base-300 p-2 rounded-lg'>
                  <p className='text-sm font-semibold mb-2'>✅{t.title}</p>
                
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default TaskStatus;
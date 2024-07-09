import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div>
      
      <div className='py-20' id="testimonials">
      <h1>
      A small selection of {" "}
      <span className='text-purple'>satisfied cllients</span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
          <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
            <InfiniteMovingCards  
            items={testimonials}
            direction='right'
            speed='slow'
             />
            
                   
                
             
             </div>
               </div>
               </div>

    </div>
  )
}

export default Clients

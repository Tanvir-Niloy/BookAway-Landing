import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80"
      className='w-full h-full object-cover'
      alt="heroImg" />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
          <h2 className='py-4 italic text-4xl'>With BookAway</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia numquam doloremque iusto obcaecati itaque rerum quidem amet maxime harum perspiciatis dolorum commodi veniam, et vero optio ea cupiditate architecto?</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
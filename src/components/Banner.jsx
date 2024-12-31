import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage : 'url(https://fiu-original.b-cdn.net/fontsinuse.com/use-images/26/26616/26616.jpeg?filename=interstellar_ver6_xlg.jpg)'}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>Interstellar</div>
    </div>
  )
}

export default Banner
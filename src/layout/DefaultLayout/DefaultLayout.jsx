import React from 'react'

function DefaultLayout({ children }) {
  return (
    <div className='lg:max-w-[1180px] md:max-w-[768px] sm:w-full px-10 py-6 rounded-lg bg-[#fff]'>{children}</div>
  )
}

export default DefaultLayout

import NewFooter from '@/components/layout/NewFooter'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='mt-[80px]'>
        {children}
        <NewFooter/>
    </div>
  )
}

export default layout
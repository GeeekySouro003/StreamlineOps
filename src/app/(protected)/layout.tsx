import { SidebarProvider } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {
    children:React.ReactNode
}
const SidebarLayout = ({children}:Props) => {
  return (
    <div>
      <SidebarProvider>
        {/*<AppSideBar /> */}
        <main className='w-full m-2'>
            <div className='flex items-center gap-2 border-sidebar-border  bg-sidebar border shadow rounded-md p-2 px-3'>
                {/* <SearchBar/> */}
                <div className='ml-auto'></div>
                <UserButton/>

            </div>

        </main>
      </SidebarProvider>
    </div>
  )
}

export default SidebarLayout

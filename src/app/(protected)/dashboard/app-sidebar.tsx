"use client"

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Bot, CreditCard, LayoutDashboard, MessageSquareMore, Presentation } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


const items = [
    {
        title:"Dashboard",
        url:"/dashboard",
        icon:LayoutDashboard,

    },
    {
    title:"Q&A",
    url:"/qa",
    icon:MessageSquareMore,
    },
    {
        title:"Meetings",
        url:"/meetings",
        icon:Presentation,
    },
    {
        title:"Billing",
        url:"/billing",
        icon:CreditCard
    }

]
export function AppSideBar() {
    const pathname=usePathname();
    return (
        <Sidebar collapsible="icon " variant="floating">
            <SidebarHeader>
                Logo comes here
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.map(item => {
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} className={cn({
                                            '!bg-blue-600 !text-white' : pathname === item.url
                                        }, 'list-none')}>

                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>

                                </SidebarMenuItem>
                            )
                        })}
                        </SidebarMenu>
                        
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
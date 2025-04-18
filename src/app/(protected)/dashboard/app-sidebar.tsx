"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import {
  CreditCard,
  LayoutDashboard,
  MessageSquareMore,
  Plus,
  Presentation
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Q&A",
    url: "/qa",
    icon: MessageSquareMore,
  },
  {
    title: "Meetings",
    url: "/meetings",
    icon: Presentation,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard
  }
]

const projects = [
  { name: "Project 1" },
  { name: "Project 2" },
  { name: "Project 3" },
]

export function AppSideBar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  // Toggle with Cmd + B or Ctrl + B
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        e.preventDefault()
        setCollapsed(prev => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Sidebar collapsed={collapsed} collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={190} height={190} />
          {/* <h1 className="text-xl font-bold text-primary/80">StreamlineOps</h1> */}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn({
                        "!bg-blue-600 !text-white": pathname === item.url
                      }, "list-none")}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map(project => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton asChild>
                    <div>
                      <div className={cn(
                        "rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary",
                        { "bg-blue-600 text-white": true }
                      )}>
                        {project.name[0]}
                      </div>
                      <span>{project.name}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <div className="h-2" />
              <SidebarMenuItem>
                <Link href="/create">
                  <Button className="w-fit" variant="outline" size="lg">
                    <Plus />
                    Setup Project
                  </Button>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

import { NavLink, useLocation } from "react-router-dom"
import { 
  AlertTriangle, 
  Heart, 
  BookOpen, 
  Phone, 
  User, 
  Settings,
  Shield,
  Stethoscope
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Emergency", url: "/", icon: AlertTriangle, emergency: true },
  { title: "First Aid Guide", url: "/first-aid", icon: Heart },
  { title: "Learning Center", url: "/learning", icon: BookOpen },
  { title: "Medical Profile", url: "/profile", icon: Stethoscope },
]

const supportItems = [
  { title: "Emergency Contacts", url: "/contacts", icon: Phone },
  { title: "Safety Resources", url: "/resources", icon: Shield },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-accent text-accent-foreground font-medium" : "hover:bg-muted/50"

  return (
    <Sidebar
      collapsible="icon"
      className="border-r bg-background"
    >

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Emergency Aid</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon 
                        className={`mr-2 h-4 w-4 ${item.emergency ? 'text-emergency' : ''}`} 
                      />
                      <span className={item.emergency ? 'text-emergency font-semibold' : ''}>
                        {item.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
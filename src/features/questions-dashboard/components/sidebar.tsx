import {
  AutoConversationsIcon,
  Bookmark02Icon,
  Building03Icon,
  HelpCircleIcon,
  Home01Icon,
  MonitorIcon,
  NotepadTextIcon,
  Settings01Icon,
  User03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const GROUPS = [
  {
    label: "WORKSPACE",
    items: [
      { icon: Home01Icon, label: "Home" },
      { icon: MonitorIcon, label: "Practice" },
      { icon: NotepadTextIcon, label: "Interviews" },
      { icon: Building03Icon, label: "Company Prep" },
    ],
  },
  {
    label: "LEARN & GROW",
    items: [
      { icon: Bookmark02Icon, label: "Notes & Bookmarks" },
      { icon: AutoConversationsIcon, label: "Progress" },
    ],
  },
  {
    label: "ACCOUNT",
    items: [
      { icon: User03Icon, label: "Profile" },
      { icon: Settings01Icon, label: "Settings" },
      { icon: HelpCircleIcon, label: "Help & Support" },
    ],
  },
];

export function QuestionsSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-foreground dark:bg-card dark:text-foreground text-background">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="data-[slot=sidebar-menu-button]:p-1.5!">
              <div className="size-32 sm:size-36">
                <img
                  src="./careercafe.png"
                  alt="CareerCafe Logo"
                  className="aspect-square size-full object-cover"
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-foreground dark:bg-card dark:text-foreground text-background">
        {GROUPS.map((group, index) => (
          <SidebarGroup key={index} className="gap-2">
            <SidebarGroupLabel className="text-muted-foreground">
              {group.label}
            </SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item, itemIndex) => (
                <SidebarMenuItem key={itemIndex}>
                  <SidebarMenuButton className="hover:bg-background h-10 px-4">
                    <HugeiconsIcon icon={item.icon} strokeWidth={2} />{" "}
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

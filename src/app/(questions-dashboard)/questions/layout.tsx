import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardHeader from "@/features/questions-dashboard/components/header";
import { QuestionsSidebar } from "@/features/questions-dashboard/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <QuestionsSidebar />
      <div className="w-full">
        <DashboardHeader />
        <main className="flex-1 px-4 sm:px-6 md:px-8">{children}</main>
      </div>
    </SidebarProvider>
  );
}

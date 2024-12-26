import { AppSidebar } from "@/components/app-sidebar";
import { MainDashboardAreaChart } from "@/components/charts/main-dashboard-area-chart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <div className="h-full">
            <div className="aspect-video rounded-xl bg-muted/50">
              {/* you can create a confidence score for each stock to wether you
              should or shouldnt buy it . and than you can add stocks you're
              interested in buying or categories you're interested in diving
              into like crypto or tech or agriculture and it can give you a list
              of the top 5 or 10 best analyzed stock from the category you've
              choosen. Create an analysis model for crypto and a stability score
              for each token, as well as a scam meter. */}
              <MainDashboardAreaChart />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}

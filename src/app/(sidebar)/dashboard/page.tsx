import DashboardClient from "@/components/dashboard-client";
import { fetchProjectsWithHydraulics } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const rows = await fetchProjectsWithHydraulics();
  return <DashboardClient rows={rows} />;
}

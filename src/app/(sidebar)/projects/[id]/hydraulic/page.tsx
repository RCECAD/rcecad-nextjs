import HydraulicForm from "@/components/hydraulic-form";
export default function HydraulicPage({ params }: { params: { id: string } }) {
  return <HydraulicForm projectId={params.id} />;
}

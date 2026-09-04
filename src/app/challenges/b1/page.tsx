import { LeftColumn } from "@/features/b1/components/left-column";
import { RightColumn } from "@/features/b1/components/right-column";

export default function Page() {
  return (
    <div className="bg-background flex min-h-svh flex-col py-14 lg:flex-row lg:overflow-hidden">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

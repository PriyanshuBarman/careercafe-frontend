import { LeftColumn } from "@/features/b0/components/left-column";
import { RightColumn } from "@/features/b0/components/right-column";

export default function Page() {
  return (
    <div className="grid h-svh lg:grid-cols-2">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

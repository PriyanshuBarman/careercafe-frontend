import LeftColumn from "@/features/start-challenge/components/left-column";
import RightColumn from "@/features/start-challenge/components/right-column";

export default function Page() {
  return (
    <div className="grid h-svh lg:grid-cols-2">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

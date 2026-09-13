import ChallengeHeader from "@/features/dashcart-challenge/components/header";

export default function Applayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChallengeHeader />
      <main>{children}</main>
    </>
  );
}

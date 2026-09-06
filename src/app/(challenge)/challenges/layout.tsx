import Navbar from "@/components/layouts/navbar";

export default function Applayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

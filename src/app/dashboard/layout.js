import TopLoader from "@/components/sub-components/TopLoader";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <TopLoader />

      {children}
    </>
  );
}

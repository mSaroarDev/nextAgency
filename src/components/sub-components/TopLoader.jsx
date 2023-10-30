import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#248277"
        crawlSpeed={200}
        height={3}
        crawl={false}
        showSpinner={false}
        easing="ease"
        speed={200}
        zIndex={1600}
      />
    </>
  );
}

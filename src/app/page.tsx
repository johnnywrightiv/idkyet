import Image from "next/image";
import NavigateButton from "@/components/navigate-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="mb-4">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <h1 className="text-2xl">Home Page</h1>
      <NavigateButton route="/test-loading" label="Test Loding" />
      <NavigateButton route="/test-error" label="Test Error" />
      <NavigateButton route="/dogs" label="Test 404" />
    </main>
  );
}

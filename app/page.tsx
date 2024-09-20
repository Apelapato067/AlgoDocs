import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[92vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-5">
      <Link
        href="https://github.com/thapasijan171/AlgoDocs"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-4xl text-balance font-extrabold mb-6 sm:text-7xl">
        Explore Essential Data Structures with In-Depth Guides and Examples
      </h1>
      <p className="mb-8 sm:text-lg max-w-[1000px] text-muted-foreground">
        Master the fundamentals and advanced concepts of data structures with
        our comprehensive documentation. From arrays to graphs, discover
        practical implementations, performance analysis, and best practices, all
        built to support your learning journey and development projects.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Explore Documentation
        </Link>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-15 flex items-center border-b px-5">
      <Button variant="ghost" className="font-bold text-xl">
        <Link href="/">My EMM Next</Link>
      </Button>
    </header>
  );
}

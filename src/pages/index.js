import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className="p-6 flex flex-col gap-5">
      <div className="p-5 rounded-md w-[150px] bg-slate-300 hover:bg-slate-200 cursor-pointer">
        <Link href="/login">Upload Files</Link>
      </div>
      <div className="p-5 rounded-md w-[150px] bg-slate-300 hover:bg-slate-200 cursor-pointer">
        <Link href="/viewfiles">View Images</Link>
      </div>
    </main>
  );
}

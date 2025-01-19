import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { NotebookPen, CalendarClock } from "lucide-react";
import Link from "next/link";

export default function BlogCardMinimal({ blog }: any) {
  return (
    <Link href={`/blog/${blog.id}`} className="group">
      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 flex items-end p-6">
          <div className="hover:animate-slideUp w-full h-full flex flex-col justify-end">
            <h1 className="text-xl font-bold text-white ">{blog.title}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function BlogMetaHeader({ blog }: any) {
  return (
    <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg mb-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 flex items-end p-6">
        <div>
          <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
          <div className="flex items-center gap-x-3 mt-4">
            <Link href="/profile">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
            <div>
              <p className="text-sm font-medium text-gray-300">
                <Link href="/profile">{blog.author}</Link>
              </p>
              <p className="text-xs text-gray-400">
                {blog.date || "14 January 2024"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

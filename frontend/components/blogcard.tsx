import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { NotebookPen, CalendarClock } from "lucide-react";
import Link from "next/link";

export default function BlogCard({ blog }: any) {
    return (
        <Link href={`/blog/${blog.id}`} className="group">
            <Card className="max-w-120 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-48 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <CardContent className="p-5">
                    <CardHeader className="p-0">
                        <CardTitle className="text-lg font-semibold">
                            {blog.title}
                        </CardTitle>
                    </CardHeader>
                    <div className="flex items-center gap-x-2 mt-3 text-gray-600 text-sm">
                        <NotebookPen className="w-4" />
                        <span>{blog.author}</span>
                    </div>
                    <p className="mt-3 text-gray-800 text-sm line-clamp-3">
                        {blog.content}
                    </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between px-5 py-4 border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <CalendarClock className="w-4" />
                        <span>{blog.date || "14 January 2024"}</span>
                    </div>
                    <span className="text-blue-600 font-medium hover:underline">
                        Read more →
                    </span>
                </CardFooter>
            </Card>
        </Link>
    );
}

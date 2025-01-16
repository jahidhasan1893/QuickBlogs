import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default async function BlogPage({ params }: { params: { id: string } }) {

    const { id } = await params;

    const response = await fetch("http://localhost:8080/api/v1/blog/" + id);
    const blog = await response.json();

    return (
        <div className="flex flex-col w-full max-w-4xl mx-auto mt-16">
            <h5 className="text-3xl font-bold text-gray-800 mb-2 text-left">{blog.title}</h5>
            <Link href={`/profile`} className="flex flex-row items-center gap-x-3 mb-5 ml-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-normal text-gray-600 text-left">{blog.author}</h1>
            </Link>
            <img src={blog.image} className="w-full h-auto block mb-8 rounded-lg object-cover" alt={blog.title} />
            <p className="text-base leading-relaxed text-gray-700 mb-8">{blog.content}</p>
        </div>
    )
}


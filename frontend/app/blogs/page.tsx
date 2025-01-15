import BlogsSkeleton from "@/components/BlogsSkeleton";

export default function AllBlogsPage(){
    return (
        <div className="flex flex-col w-full">
            <h1 className="flex justify-center mt-10 font-semibold text-xl"> All Blogs Page </h1>
            <BlogsSkeleton />
        </div>
    )
}
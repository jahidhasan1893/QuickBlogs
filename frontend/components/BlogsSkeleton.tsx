import BlogsRow from "@/components/BlogsRow";
import BlogCard from "./blogcard";


export default function BlogsSkeleton(){
    return (
        <div className="mt-10 mb-10 grid grid-cols-3 gap-5 justify-center mx-auto max-w-6xl">
            <BlogCard />
            <BlogCard />
            <BlogCard />   
            <BlogCard />

        </div>
    )
}
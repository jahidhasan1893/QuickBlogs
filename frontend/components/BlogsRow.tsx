import BlogCard from "@/components/blogcard";

export default function BlogsRow(){
    return (
        <div className="flex flex-row justify-center gap-5 m-5">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    )
}
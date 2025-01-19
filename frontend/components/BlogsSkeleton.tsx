import BlogCard from "./blogcard";
import BlogCardMinimal from "./blogcard-minimal";


export default function BlogsSkeleton({blogs, blogCardType}:any){

    return (
        <div className="mt-10 mb-10 grid grid-cols-3 gap-5 justify-center mx-auto max-w-6xl">
            {blogs.map((blog:any)=>(
                blogCardType === "minimal" ? (
                    <BlogCardMinimal key={blog.id} blog={blog}/>
                ) : (
                    <BlogCard key={blog.id} blog={blog}/>
                )
            ))}
        </div>
    )
}
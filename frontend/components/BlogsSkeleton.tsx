import BlogCard from "./blogcard";


export default function BlogsSkeleton({blogs}:any){

    return (
        <div className="mt-10 mb-10 grid grid-cols-3 gap-5 justify-center mx-auto max-w-6xl">
            {blogs.map((blog:any)=>(
                <BlogCard key={blog.id} blog={blog}/>
            ))}
        </div>
    )
}
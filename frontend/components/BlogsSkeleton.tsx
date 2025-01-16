import BlogCard from "./blogcard";


export default async function BlogsSkeleton(){
    const response = await fetch("http://localhost:8080/api/v1/blog/");

    const blogs = await response.json();

    console.log(blogs);

    return (
        <div className="mt-10 mb-10 grid grid-cols-3 gap-5 justify-center mx-auto max-w-6xl">
            {blogs.map((blog:any)=>(
                <BlogCard key={blog.id} blog={blog}/>
            ))}
        </div>
    )
}
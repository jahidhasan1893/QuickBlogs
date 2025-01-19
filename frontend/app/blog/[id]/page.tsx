import Link from "next/link";
import { blogs } from "@/blogs";
import Comments from "@/components/comment";
import CommentBox from "@/components/comment-box";
import BackButton from "@/components/back-button";
import { Separator } from "@/components/ui/separator";
import BlogContent from "@/components/blog-content";
import BlogMetaHeader from "@/components/blog-meta-header";
import ErrorLoading from "@/components/error-loading";

export default async function BlogPage({ params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const blog: any = blogs.find((blog) => blog.id === id);

    return (
      <div className="w-full max-w-5xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        
        <BlogMetaHeader blog={blog} />

        <BlogContent content={blog.content} />
        

        <CommentBox comments = {blog.comments} />

        <div className="mt-12 mb-8">
          <div className="border-t border-gray-200 pt-6 text-center">
            < BackButton />
          </div>
        </div>

      </div>
    );
  } catch (error) {
    return (
      <ErrorLoading message="Error loading blog. Please try again later." />
    );
  }
}

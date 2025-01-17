import BlogsSkeleton from "@/components/BlogsSkeleton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {blogs} from "@/blogs"

export default async function AllBlogsPage() {
  try {
    // const response = await fetch("http://localhost:8080/api/v1/blog/");

    // const blogs = await response.json();


    return (
      <div className="flex flex-col w-full">
        <h1 className="flex justify-center mt-10 font-semibold text-xl">
          All Blogs Page
        </h1>
        <BlogsSkeleton blogs={blogs} />
        <Pagination className="mb-5">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1 className="flex justify-center mt-10 font-semibold text-xl">
          Error loading blogs. Please try again later.
        </h1>
      </div>
    );
  }
}

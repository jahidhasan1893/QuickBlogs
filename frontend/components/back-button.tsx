import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/blogs"
      className="inline-flex items-center px-6 py-3 text-sm font-medium text-slate-900 border border-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200"
    >
      &larr; Back to All Blogs
    </Link>
  );
}

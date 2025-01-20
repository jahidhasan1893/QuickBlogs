import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WriteBlogPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Write a Blog</h1>
      <input placeholder="Title" className="w-1/2 mb-4 px-3 py-1 h-9 text-base text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-slate-500" />
      <Input id="picture" type="file" className="w-1/2 mb-4 px-3 py-1 h-9 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-slate-500" />
      <textarea
                className="w-1/2 p-4 text-base text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-slate-500"
                rows={16}
                placeholder="Write your blog here..."
              ></textarea>
      <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-900 transition-colors mt-6"
              >
                Submit Blog
              </button>
    </div>
  );
}

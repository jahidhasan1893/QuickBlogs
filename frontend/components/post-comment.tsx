export default function PostComments(){
    return (
        <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Leave a Comment</h3>
            <form className="flex flex-col gap-y-4">
              <textarea
                className="w-full p-4 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-slate-500"
                rows={4}
                placeholder="Write your comment..."
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-900 transition-colors"
              >
                Post Comment
              </button>
            </form>
          </div>
    )
}
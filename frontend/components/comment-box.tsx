import Comment from "./comment";
import PostComment from "./post-comment";

export default function CommentBox({comments}:any){
    return (
        <div className="bg-gray-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comments</h2>

          <div className="flex flex-col gap-y-6">
             {comments.map((comment:any)=>(
                            <Comment key={comment.id} comment={comment}/>
                        ))}
          </div>

          < PostComment />
        </div>

    )
}
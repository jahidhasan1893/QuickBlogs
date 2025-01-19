import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { users } from "@/users";


export default function Comment( {comment}:any) {


  return (
    <div className="flex items-start gap-x-4">
      <Avatar className="w-10 h-10">
        <AvatarImage src={comment.commentor.image} alt={comment.commentor.name} className="rounded-full object-cover" />
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium text-gray-900">{comment.commentor.name}</p>
        <p className="text-xs text-gray-500 mb-2">1 day ago</p>
        <p className="text-gray-700 text-sm">
          { comment.content}
        </p>
      </div>
    </div>
  );
}

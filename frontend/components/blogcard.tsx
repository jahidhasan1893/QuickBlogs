import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { NotebookPen } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import Link from "next/link";


export default function BlogCard({blog}:any){
    return (
        <Link href={`/blog/${blog.id}`}>
            <Card className="max-w-120">
                <CardHeader>
                    <CardTitle>{blog.title}</CardTitle>
                    <CardDescription className="w-25">
                        <img src={blog.image} alt={blog.title} className="h-40 w-full object-cover" />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row align-middle gap-x-1.5 mb-3"> <NotebookPen className="w-5"/> <h1 className="font-sm italic font-medium">{blog.author }</h1></div>
                    <p>{blog.content}</p>
                </CardContent>
                <CardFooter className="flex align-middle flex-row gap-2">
                    <CalendarClock className="w-5"/>
                    <p className="font-sm font-medium">14 january 2024</p>
                </CardFooter>
            </Card>

        </Link>
    )
}
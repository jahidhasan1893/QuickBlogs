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
import {Caladea} from "next/dist/compiled/@next/font/dist/google";
import {Separator} from "@/components/ui/separator";

export default function BlogCard(){
    return (
        <div>
            <Card className="max-w-80">
                <CardHeader>
                    <CardTitle>Blog Title</CardTitle>
                    <CardDescription className="w-25">
                        <img src="https://cms.bibijaan.com/wp-content/uploads/2020/04/puropuri-bikri-2.jpg" alt="ssfd"/>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row align-middle gap-x-1.5 mb-3"> <NotebookPen className="w-5"/> <h1 className="font-sm italic font-medium">Blog Author </h1></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.....</p>
                </CardContent>
                <CardFooter className="flex align-middle flex-row gap-2">
                    <CalendarClock className="w-5"/>
                    <p className="font-sm font-medium">14 january 2024</p>
                    {/*<Separator />*/}
                    {/*<p> 100 view</p>*/}
                </CardFooter>
            </Card>

        </div>
    )
}
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

export default function ProfilePage() {
    return (
        <div>
            <Card className="w-full max-w-3xl mx-auto mt-16 p-5 shadow-2xl">
                <CardContent className="flex flex-row gap-x-5 justify-center items-center">
                    <div>
                        <img src="https://github.com/shadcn.png" alt="user profile" className="rounded-full w-32 h-32" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">John Doe</h1>
                        <p>john.doe@example.com</p>
                        <div className="flex flex-row gap-x-3 mt-5">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                        </div>
                    </div>
                </CardContent>
            </Card>
            < Separator className="my-10 w-1/2 mx-auto h-0.5 bg-gray-300 border-rounded-full" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="">User Blogs</h1>
                <Card className="w-1/2 mx-auto mt-10 grid grid-cols-3 gap-5 justify-center mx-auto max-w-6xl">
                    <CardContent> 
                        <h1>No blogs yet</h1>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
}
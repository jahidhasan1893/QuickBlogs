import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="bg-gray-50 min-h-screen p-5">
            <Card className="w-full max-w-3xl mx-auto mt-16 p-8 shadow-xl rounded-lg bg-white">
                <CardContent className="flex flex-col sm:flex-row gap-x-8 items-center">
                    <img
                        src="https://github.com/shadcn.png"
                        alt="user profile"
                        className="rounded-full w-40 h-40 shadow-lg"
                    />
                    <div className="text-center sm:text-left">
                        <h1 className="text-4xl font-extrabold text-gray-800">John Doe</h1>
                        <p className="text-gray-600 text-lg mt-2">john.doe@example.com</p>
                        <div className="flex flex-row gap-x-4 mt-5 justify-center sm:justify-start">
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-pink-500 hover:text-pink-700">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Separator className="my-16 w-2/3 mx-auto h-0.5 bg-gray-300 rounded-full" />

            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold text-gray-800">User Blogs</h1>
                <Card className="w-full max-w-6xl mt-10 p-8 bg-white shadow-xl rounded-lg">
                    <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Placeholder for blog entries */}
                        <div className="col-span-full text-center text-gray-500">
                            <h1 className="text-lg">No blogs yet</h1>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

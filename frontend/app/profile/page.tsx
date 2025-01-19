import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { users} from "@/users"
import BlogsSkeleton from "@/components/BlogsSkeleton";
import BlogCard from "@/components/blogcard";

export default function ProfilePage() {
    const user = users[0];

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            {/* Profile Card */}
            <Card className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 mt-12">
                <CardContent className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                    <img
                        src={user.image}
                        alt="user profile"
                        className="rounded-full w-32 h-32 shadow-2xl border-2 border-slate-900"
                    />
                    <div className="text-center sm:text-left">
                        <h1 className="text-3xl font-semibold text-gray-800">{user.name}</h1>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="mt-4 text-gray-700 text-lg">
                            {user.bio}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Separator */}
            <Separator className="my-12 w-1/2 h-0.5 bg-gray-300 rounded-full" />

            {/* Blogs Section */}
            <div className="w-full max-w-4xl">
                <h2 className="text-xl font-semibold text-gray-800 text-center">Latest Articles</h2>
                <Card className="w-full mt-8 p-6 bg-white shadow-lg rounded-lg">
                    <BlogsSkeleton blogs={user.blogs} blogCardType="minimal"/>
                </Card>
            </div>
        </div>
    );
}

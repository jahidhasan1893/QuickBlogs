export default function Footer(){
    return (
        <div className="flex flex-col gap-2 items-center justify-center bg-slate-900 text-white p-5">
            <h1> This Website was developed by Md Jahid Hasan </h1>
            <p className="text-sm">&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
    )
}
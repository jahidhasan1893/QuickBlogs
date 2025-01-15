import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function SearchBar(){
    return (
        <div className="flex w-full max-w-sm items-center space-x-2 ">
        <Input type="search" placeholder="Search" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" />
        <Button type="submit" className="">Search</Button>
      </div>
    )
}
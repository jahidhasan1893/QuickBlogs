export default function ErrorLoading({message}:any){
    return (
        <div className="flex justify-center mt-10 font-semibold text-xl text-red-500">
        {message}
      </div>
    )
}
import Link from "next/link"

const HomePage = () => {
  return (
    <div className="flex w-full min-h-screen bg-neutral-200 p-10 items-center justify-center">
      <div className="flex flex-col gap-3">
        <div className="font-bold text-3xl">
          welcome to a realtime chat app
        </div>
        <div className="">
          <Link href={'/auth/login'} className="text-blue-700 underline hover:text-blue-400 font-bold transition-colors">Login</Link> or <Link href={'/auth/signup'} className="text-blue-700 underline hover:text-blue-400 font-bold transition-colors">Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
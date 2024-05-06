import { LoginButtonGroup } from "./LoginButtonGroup"

export const LoginContent = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f1f5f9]">
      <div className="w-[420px] bg-white border border-[#e4edf4] rounded-md max-w-[90vw] text-center p-8 shadow-[0_5px_20px_#00166721]">
        <p className="font-bold text-5xl mb-6">Login</p>
        <LoginButtonGroup />
      </div>
    </div>
  )
}

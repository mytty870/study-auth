import { LoginButtonGroup } from "./LoginButtonGroup"

export const LoginContent = () => {
  return (
    <div className="flex">
      <div className="w-[420px] border border-gray-300 rounded-md max-w-[90vw]  text-center m-auto p-8">
        <p className="font-bold text-5xl mb-3">Gatherly</p>
        <div className="mb-3">
          <p>Gatherly は、〜〜〜ができるサービスです。ああああああああああああああああ</p>
        </div>
        <LoginButtonGroup />
      </div>
    </div>
  )
}

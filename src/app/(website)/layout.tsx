export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>
<header className="bg-red-300">
        <div className="mx-6 py-3">
          <div className='flex justify-between'>
            Gatherly
          </div>
        </div>
      </header>
        {children}
</>
  )
}
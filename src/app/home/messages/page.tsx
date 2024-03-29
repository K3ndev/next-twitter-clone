export default function Page() {
  return (
    <>
      <main className="max-w-[50rem] flex-1 border-x-[1px] border-white/55 text-white">
        <div className="flex h-full flex-col ">
          <div className="px-4 py-2">Messages</div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-2 sm:p-[0.6rem] lg:p-3 ">Coming soon</div>
          </div>
        </div>
      </main>

      <footer className="sticky top-0 hidden h-dvh w-[22rem] md:px-4 md:py-3 xl:block">
        Coming soon
      </footer>
    </>
  );
}

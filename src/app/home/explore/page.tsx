import { Separator } from '~/shared/_shacdn/ui/separator';
import { Input } from '~/shared/_shacdn/ui/input';
import ListAllUsers from '../_components/list-all-users/listAllUsers';

export default function Page() {
  return (
    <>
      <main className="flex-1 border-x-[1px] border-white/55 text-white">
        <div className="flex h-full flex-col ">
          <div className="px-4 py-2">
            <Input type="search" placeholder="Search" className="w-full rounded-full text-black" />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div>
              <div className="p-2 sm:p-[0.6rem] lg:p-3">
                Trending
                <Separator className="my-4" />
              </div>

              <div>
                <div className="p-2 sm:p-[0.6rem] lg:p-3 ">
                  <div className="">Explore tab</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="hidden w-[22rem] overflow-y-auto md:px-4 md:py-3 xl:block">
        <div className="mb-5 rounded-lg bg-white/10 p-5 text-white">
          <div className="flex w-full flex-col">
            <p className="pb-2 text-xl font-bold">Visit the GitHub project</p>
            <p className="pb-3 text-sm">
              Explore the source code of this Next.js app with server components on GitHub to
              understand its implementation.
            </p>
            <a
              href="https://github.com/K3ndev/next-twitter-clone"
              target="_blank"
              className="w-min cursor-pointer rounded-full bg-white px-5 py-3 text-base font-medium text-black hover:bg-white/70"
            >
              GitHub
            </a>
          </div>
        </div>
        <ListAllUsers />
      </footer>
    </>
  );
}

// when the user put '@' it will direct to username then if not it will direct to tweets body

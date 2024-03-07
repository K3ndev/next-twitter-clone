import { Separator } from '~/shared/_shacdn/ui/separator';
import { Input } from '~/shared/_shacdn/ui/input';
import CheckUser from './_action/check-user';
import { notFound } from 'next/navigation';
import getUserData from './_action/get-user-data';
import ListAllUsers from '../_components/list-all-users/listAllUsers';

export default async function Page({ params }: { params: { profile: string } }) {
  const isUserExist = await CheckUser(params.profile);

  // getting data
  const userData = await getUserData(params.profile);

  if (!isUserExist) {
    notFound();
  }

  return (
    <>
      <main className="max-w-[50rem] flex-1 border-x-[1px] border-white/55 text-white">
        <div className="flex h-full flex-col ">
          <div className="px-4 py-2">{userData?.username}</div>
          <div className="flex-1 overflow-y-auto">
            <div>
              <div className="p-2 sm:p-[0.6rem] lg:p-3">
                Hero Section
                <Separator className="my-4" />
              </div>

              <div>
                <div className="p-2 sm:p-[0.6rem] lg:p-3 ">
                  <div className="">Tweets Section</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="sticky top-0 hidden h-dvh w-[22rem] md:px-4 md:py-3 xl:block">
        <Input
          type="search"
          placeholder="Search"
          className="mb-10 w-full rounded-full text-black"
        />
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

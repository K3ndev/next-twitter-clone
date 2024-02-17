import Link from 'next/link';
import { Button } from '~/shared/_shacdn/ui/button';
import { Input } from '~/shared/_shacdn/ui/input';
import LogoX from '~/shared/_icons/logo-x';
import signup from './_action/signup-action';
import { Form } from "~/server/form";

export default function SignUp() {

  return (
    <div className="absolute h-screen w-screen bg-black sm:bg-white/40">
      <div className="flex h-full items-center justify-center">
        <div
          // ref={ref}
          className="relative p-4 text-white sm:h-[40.625rem] sm:w-[37.5rem] sm:rounded-lg sm:bg-black"
        >
          <div className="mb-20">
            <Link href="/" className="absolute">
              X
            </Link>

            <div className="flex justify-center">
              <div className="mx-auto w-8">
                <LogoX />
              </div>
            </div>
          </div>

          <div className="mx-auto flex  w-full min-w-[15rem] max-w-[22rem] flex-col">
            <Form action={signup} >
              <div className="mb-10">
                <h1 className="mb-9 text-2xl sm:text-3xl">Create your account</h1>
                <div >
                  {/* <Input type="text" placeholder="Name" className="mb-5" /> */}
                  <Input name="username" id="username" type="text" placeholder="Username" className="mb-5 text-black" />
                  <Input name="password" id="password" type="password" placeholder="Password" className="text-black" />
                </div>
              </div>

              <div>
                <Button className="w-full">Continue </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

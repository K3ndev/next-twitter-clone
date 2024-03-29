import { Input } from '~/shared/_shacdn/ui/input';
import { Form } from '~/server/form';
import login from './action/signin-action';
import { Button } from '~/shared/_shacdn/ui/button';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <>
      <Button type="submit" disabled={pending} className="mb-5 w-full">
        {pending ? 'Loading...' : 'Continue'}
      </Button>
      <Button type="button" className="mb-5 w-full" disabled={pending}>
        <Link href={'/i/flow/password_reset'}>Forgot password?</Link>
      </Button>
    </>
  );
}

export default function SignInForm() {
  return (
    <>
      <div className="flex flex-col">
        <Form action={login}>
          <Input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            className="mb-5 text-black"
          />
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className="mb-5 text-black"
          />
          <Submit />
        </Form>
      </div>
    </>
  );
}

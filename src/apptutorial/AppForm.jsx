import { IconBrandFacebook, IconBrandGit, IconBrandX } from '@tabler/icons-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Label from '../components/Label';
import { useState } from 'react';

export default function AppForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  function onChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function Submit(event) {
    event.preventDefault();

    console.log('Form!');
  }

  return (
    <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen'>
      <div className='max-w-md w-full'>
        <form onSubmit={Submit}>
          <Card>
            <Card.Title>Sign up for new account!</Card.Title>
            <Card.Body>
              <div className='mb-5 border rounded-lg p-4'>
                <p>Name : {form.name || '------'}</p>
                <p>Email : {form.email || '------'}</p>
              </div>
              <div className='mb-6'>
                <Label htmlFor='name' value={'Name'} />
                <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
              </div>
              <div className='mb-6'>
                <Label htmlFor='email' value={'Email'} />
                <Input value={form.email} onChange={onChange} id={'email'} name={'email'} />
              </div>
            </Card.Body>
            <Card.Footer>
              <Button className='bg-black' type='submit'>
                <IconBrandGit />
                Register
              </Button>
            </Card.Footer>
          </Card>
        </form>
      </div>
    </div>
  );
}

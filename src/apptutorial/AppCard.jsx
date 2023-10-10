import { IconBrandFacebook, IconBrandGit, IconBrandX } from '@tabler/icons-react';
import Button from '../components/Button';
import Card from '../components/Card';

export default function AppCard() {
  return (
    <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen'>
      <div className='max-w-md w-full'>
        <Card>
          <Card.Title>Hello react!</Card.Title>
          <Card.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequuntur pariatur nesciunt fugiat, autem sed temporibus voluptates,
            nulla cum voluptas porro magni nostrum laborum voluptatem aperiam similique ullam? Minus, iure?
          </Card.Body>
          <Card.Footer>
            <Button>
              <IconBrandFacebook />
              Register
            </Button>
            <Button className='bg-blue-300'>
              <IconBrandX />
              Register
            </Button>
            <Button className='bg-black'>
              <IconBrandGit />
              Register
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

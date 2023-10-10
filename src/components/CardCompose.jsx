export default function CardCompose() {
  return (
    <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen'>
      {/* <div className='max-w-md w-full'></div> */}

      {/* Button */}
      <Card>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dicta enim dolor amet, voluptatum temporibus odio quis in nostrum
        repellendus nobis assumenda minus consectetur nesciunt vitae ex quibusdam doloribus. Similique?
      </Card>
      <div className='flex gap-x-2'>
        <Button onClick={() => console.log('Register')}>
          <IconBrandX />
          Login
        </Button>
        <Button className='bg-blue-800'>
          <IconBrandFacebook />
          Login
        </Button>
        <Button className='bg-black'>
          <IconBrandGit />
          Login
        </Button>
      </div>
    </div>
  );
}

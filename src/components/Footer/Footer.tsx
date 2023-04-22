export default function Footer() {
  return (
    <footer className='w-full flex flex-row justify-center gap-1 mb-4'>
      <p>Copyright &copy; {new Date().getFullYear()} MR-Addict</p>
      <p>•</p>
      <a href='https://github.com/MR-Addict/videojs-demo' className='underline'>
        Github
      </a>
    </footer>
  );
}

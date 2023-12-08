import Link from "next/link";

const Page = () => {
  return (
    <main>
      <h1>Debugging Page</h1>
      <Link href="/home"><h3>Home</h3></Link>
      <Link href="/about"><h3>About</h3></Link>
    </main>
  );
};

export default Page;

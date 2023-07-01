import Link from "next/link";

const Links = (): JSX.Element => {
  return (
    <div className="flex gap-10 font-medium capitalize text-forth text-16">
      <Link href="/">home</Link>
      <Link href="/">menu</Link>
      <Link href="/">service</Link>
      <Link href="/">shop</Link>
    </div>
  );
};

export default Links;

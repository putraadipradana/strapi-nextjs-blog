import Link from "next/link";

interface LogoProps {
  text?: string;
}

export function Logo({ text = "Logo Text" }: Readonly<LogoProps>) {
  return (
    <Link href={"/"}>
      <span className="sr-only">{text}</span>
      <img
        className={"h-8 w-auto"}
        src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=900"
        alt=""
      />
    </Link>
  );
}

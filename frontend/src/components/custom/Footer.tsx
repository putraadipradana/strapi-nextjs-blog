import Link from "next/link";
import { Github, Instagram, Twitter } from "../icon/SocialIcon";

interface SocialLinks {
  id: number;
  text: string;
  url: string;
}

interface FooterProps {
  data: {
    text: string;
    socialLinks: SocialLinks[];
  };
}

function selectSocialIcon(url: string) {
  if (url.includes("github"))
    return <Github className="h-6 w-6 fill-current" />;
  if (url.includes("instagram"))
    return <Instagram className="h-6 w-6 fill-current" />;
  if (url.includes("twitter"))
    return <Twitter className="h-6 w-6 fill-current" />;
  return null;
}

export function Footer({ data }: Readonly<FooterProps>) {
  const { text, socialLinks } = data;
  return (
    <footer className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200">
          <div className="flex flex-col items-center justify-between space-y-8 py-8 sm:flex-row-reverse sm:space-y-0">
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <Link
                  href={link.url}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {selectSocialIcon(link.url)}
                  <span className="sr-only">Visit me at {link.text}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm tracking-tight text-gray-500">
              &copy; {text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { StrapiImage } from "@/components/custom/StrapiImage";

const post = {
  id: 1,
  cover:
    "https://images.unsplash.com/photo-1710003364549-de37d4ed3413?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Boost your conversion rate",
  href: "/post/boost-your-conversion-rate",
  description:
    "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  category: { title: "Marketing", href: "/category/marketing" },
  author: {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    href: "/author/michael-foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

export default function Post() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-2 flex items-center text-lg leading-8 text-gray-600">
            <Link
              href={"/"}
              className="pr-2 hover:text-gray-700 hover:underline hover:underline-offset-2"
            >
              {"Blog"}
            </Link>
            &middot;
            <div className="flex items-center pl-2">
              <p>
                By{" "}
                <Link
                  href={post.author.href}
                  className="hover:text-gray-700 hover:underline hover:underline-offset-2"
                >
                  {post.author.name}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-10">
        <figure className="aspect-h-1 aspect-w-1 overflow-hidden sm:aspect-h-3 sm:aspect-w-4">
          <StrapiImage
            src={post.cover}
            height={1080}
            width={1920}
            alt="no alt"
            className="w-full object-cover object-center sm:h-[60%]"
          />
        </figure>
      </div>
    </div>
  );
}

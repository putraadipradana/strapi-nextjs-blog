import Link from "next/link";
import { getPostData } from "@/data/loader";
import { format } from "date-fns";

interface CategoryProps {
  id: number;
  name: string;
  slug: string;
}

interface PostProps {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
  category: CategoryProps;
}

export async function PostSection({ data }: { readonly data: any }) {
  const posts = await getPostData();
  const { heading } = data;

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 py-10 sm:mt-16 sm:py-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <h2 className="sr-only">{heading}</h2>

      {posts.data.map((post: PostProps) => (
        <article
          key={post.id}
          className="flex max-w-xl flex-col items-start justify-between"
        >
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.createdAt} className="text-gray-500">
              {format(new Date(post.createdAt), "MMM dd, yyyy")}
            </time>
            <Link
              href={"/category/" + post.category.slug}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {post.category.name}
            </Link>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <Link href={"/post/" + post.slug}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {post.excerpt}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img
              src={
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <Link href={"/author/michael-foster"}>
                  <span className="absolute inset-0" />
                  {"Michael Foster"}
                </Link>
              </p>
              <p className="text-gray-600">{"Co-Founder / CTO"}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

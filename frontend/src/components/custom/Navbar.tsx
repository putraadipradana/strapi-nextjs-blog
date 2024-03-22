"use client";
import { useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Logo } from "./Logo";
import Link from "next/link";

export function Navbar({ data }: { readonly data: any }) {
  const [open, setOpen] = useState<Boolean>(false);
  const { signUp, signIn, logoText } = data;

  return (
    <header className="relative bg-white">
      <div className="border-b border-gray-200">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Logo text={logoText.text} />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link
                  href={signIn.url}
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {signIn.text}
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link
                  href={signUp.url}
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {signUp.text}
                </Link>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <button
                  type="button"
                  className="p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

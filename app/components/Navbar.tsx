"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import "./../globals.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Projects", href: "/projects", current: true },
  { name: "About me", href: "/aboutme", current: false },
  { name: "Get In Touch", href: "/contacts", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <Disclosure
      as="nav"
      className="bg-pink-200 border-b-4 border-b-fuchsia-100 dark:bg-slate-800"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden m">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center gap-2 ml-10 md:ml-0">
                  <Image src="/cat.png" alt="" height={40} width={40} />
                  <a
                    className="outline-text text-pink-200 sm:text-3xl text-2xl hover:text-black"
                    href="/"
                  >
                    ANGELO ILARDI
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? "border border-black dark:border-pink-200"
                            : "font-bold",
                          "rounded-md px-3 py-2 text-sm md:text-base font-medium dark:text-pink-200 dark:hover:bg-pink-200 dark:hover:text-slate-800 focus:ring-0"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "border border-pink-200"
                        : "text-black hover:pl-8",
                      "block rounded-md px-3 py-2 text-base font-medium dark:text-pink-200 dark:hover:bg-pink-200 dark:hover:text-slate-800"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

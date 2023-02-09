import Image from "next/image";
import React from "react";
import {
    MagnifyingGlassIcon,
    HomeIcon,
    PlayCircleIcon,
    UserGroupIcon,
    Squares2X2Icon,
    ChatBubbleOvalLeftEllipsisIcon,
    BellIcon,
    ChevronDownIcon,
    BuildingStorefrontIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";
import image from "./pan pic.jpg";

function Header() {
    const { data: session } = useSession();
    return (
        <div className="flex items-center justify-between p-2 bg-slate-50">
            <div className="flex items-center flex-1">
                <Image
                    src="https://links.papareact.com/5me"
                    height={100}
                    width={100}
                    className="mr-3 h-9 w-9"
                    alt="fb-logo"
                />
                <div className="items-center sm:px-2 lg:px-3 py-1 bg-gray-100 rounded-full hidden lg:flex">
                    <MagnifyingGlassIcon className="sm:h-5 lg:h-7 mr-3 text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search...."
                        className="outline-none border-none sm:py-1 sm:px-0 lg:px-2 lg:py-1 bg-transparent text-gray-600"
                    />
                </div>
            </div>

            <div className="text-gray-200 flex flex-1 space-x-5 sm:justify-between ">
                <HomeIcon className="h-5 lg:h-7 mr-3 text-gray-600" />
                <UsersIcon className="h-5 lg:h-7 mr-3 text-gray-600" />
                <PlayCircleIcon className="h-5 lg:h-7 mr-3 text-gray-600" />
                <BuildingStorefrontIcon className="h-5 lg:h-7 mr-3 text-gray-600" />
                <UserGroupIcon className="h-5 lg:h-7 mr-3 text-gray-600 rounded-full border-2 border-gray-600" />
            </div>
            <div className="flex items-center flex-1 justify-end space-x-7">
                <div className="flex items-center space-x-2">
                    <Image
                        className="rounded-full"
                        src={session?.user?.image}
                        width={40}
                        height={40}
                        alt="profile-pic"
                        onClick={signOut}
                    />
                    <p className="hidden xl:block font-bold">
                        {session?.user?.name}
                    </p>
                </div>
                <div className="hidden justify-between lg:flex space-x-4">
                    <Squares2X2Icon className="h-7 text-gray-600" />
                    <ChatBubbleOvalLeftEllipsisIcon className="h-7 text-gray-600" />
                    <BellIcon className="h-7 text-gray-600" />
                    <ChevronDownIcon className="h-7 text-gray-600" />
                </div>
            </div>
        </div>
    );
}

export default Header;

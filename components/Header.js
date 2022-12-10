import Image from "next/image";
import React from "react";
import {
    MagnifyingGlassIcon,
    HomeIcon,
    FlagIcon,
    PlayCircleIcon,
    ShoppingCartIcon,
    UserGroupIcon,
    Squares2X2Icon,
    ChatBubbleOvalLeftEllipsisIcon,
    BellIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/solid";
import pic from "./pan pic.jpg";

function Header() {
    return (
        <div className="flex items-center justify-between p-2">
            <div className="flex items-center flex-1">
                <Image
                    src="https://links.papareact.com/5me"
                    height={100}
                    width={100}
                    className="mr-3 h-9 w-9"
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
                <HomeIcon className="h-7 mr-3 text-gray-600" />
                <FlagIcon className="h-7 mr-3 text-gray-600" />
                <PlayCircleIcon className="h-7 mr-3 text-gray-600" />
                <ShoppingCartIcon className="h-7 mr-3 text-gray-600" />
                <UserGroupIcon className="h-7 mr-3 text-gray-600" />
            </div>
            <div className="flex items-center flex-1 justify-end space-x-7">
                <div className="flex items-center space-x-2">
                    <Image
                        className="rounded-full"
                        src={pic}
                        width={40}
                        height={40}
                    />
                    <p className="hidden sm:block font-bold">Nitish Kumar</p>
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

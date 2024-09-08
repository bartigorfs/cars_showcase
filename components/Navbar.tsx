import Link from 'next/link'
import Image from "next/image";

import BaseButton from "@/components/BaseButton";

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image src='/logo.png' alt="Car Hub Logo" width={118} height={18} className="object-contain"></Image>
                </Link>
                <div className='flex items-center gap-4'>
                <BaseButton title="Sign up" btnType="button" containerStyles="text-primary-blue border rounded-full bg-white min-w-[130px]" />
                <BaseButton title="Sign in" btnType="button" containerStyles="text-primary-blue border rounded-full bg-white min-w-[130px]" />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
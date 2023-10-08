'use client'

import {Github} from "lucide-react";
import Link from "next/link";
import {siteData} from "@/lib/constant";

const Header = () => {
    return (
        <header className={'container flex justify-between items-center px-4 pt-8'}>
            <div className={'text-2xl font-mono'}>Done</div>
            <div className={'flex justify-center items-center space-x-8'}>
                <Link href={'#home'}>Home</Link>
            </div>
            <Link href={siteData.github}>
                <Github/>
            </Link>
        </header>
    );
}


export default Header
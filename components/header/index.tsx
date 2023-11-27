'use client'

import React from "react";
import {Album} from "lucide-react";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import Feedback from "@/components/header/feedback";
import Profile from "@/components/header/profile";
import {clsx} from "clsx";


const Header = ({routers}: any) => {
    const pathname = usePathname()

    return (
        <>
            <div className={'pt-4 pb-3 px-4 md:px-8'}>
                <div className={'flex justify-between mb-4'}>
                    <div className={'flex items-center justify-center'}>
                        <Album size={30}/>
                        {/*<div className={'text-2xl text-zinc-200 font-semibold rotate-12 ml-4'}>/</div>*/}
                        {/*/!*动态展示*!/*/}
                        {/*<ProjectMenu/>*/}
                    </div>
                    <div className={'flex items-center justify-center space-x-4'}>
                        <Feedback/>
                        <Profile/>
                    </div>
                </div>
                <div className={'flex justify-start items-center space-x-8'}>
                    {routers?.map((router: any) => {
                        const href = '/dashboard' + router.value
                        const active = pathname === href
                        return (
                            <Link className={`group relative`} href={href}>
                                <div className={clsx('text-sm', active && 'font-semibold')}>
                                    {router.name}
                                </div>
                                {active && <Separator className={'h-[2px] bg-black absolute top-8'}/>}
                                <div
                                    className={'absolute -inset-y-2 -inset-x-2 -z-10 scale-50 bg-zinc-200 sm:rounded-md opacity-0 transition duration-400 group-hover:scale-100 group-hover:opacity-100 rounded-md'}/>
                            </Link>

                        )
                    })}
                </div>
            </div>
            <Separator/>
        </>
    );
}


export default Header
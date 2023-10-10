'use client'

import React from "react";
import {Button} from "@/components/ui/button";
import {useSession} from "next-auth/react";
import ProjectMenu from "@/app/dashboard/components/project-menu";
import ProfileMenu from "@/app/dashboard/components/profile-menu";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navs = [
    {
        name: 'Overview',
        value: '/'
    },
    {
        name: 'Settings',
        value: '/settings'
    }
]

const Header = () => {
    const {data}: any = useSession() || {}

    const pathname = usePathname()
    const getActive = () => {
        const path = pathname.split('dashboard')[1]
        return navs.find((item) => item.value == path ? path : '/')?.value
    }

    return (
        <div className={'px-8 pt-8 pb-1 h-[10vh]'}>
            <div className={'flex justify-between mb-6'}>
                <div className={'flex justify-center items-center'}>
                    <span className={'text-2xl mr-4 font-mono hidden md:block'}>Done</span>
                    <ProjectMenu data={data}/>
                </div>
                <div className={'flex items-center space-x-4'}>
                    <Button variant={'outline'}>
                        FeedBack
                    </Button>
                    <ProfileMenu data={data}/>
                </div>
            </div>
            <div>
                {navs.map((item) => {
                    return (
                        <Link href={item.value}>
                            <Button variant={getActive() == item.value ? 'secondary' : 'ghost'} size={'lg'}
                                    className={'text-base'}>
                                {item.name}
                            </Button>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Header



'use client'

import React from "react";
import {Button} from "@/components/ui/button";
import {useSession} from "next-auth/react";
import ProjectMenu from "@/app/dashboard/components/project-menu";
import ProfileMenu from "@/app/dashboard/components/profile-menu";
import {usePathname} from "next/navigation";
import ShadowLink from "@/components/shadow-link";
import {Bell, HelpCircle} from "lucide-react";
import FeedBack from "@/app/dashboard/components/feed-back";

const navs = [
    {
        name: 'Dashboard',
        value: '/'
    },
    {
        name: 'Projects',
        value: '/projects'
    },
    {
        name: 'Todos',
        value: '/teams'
    },
    {
        name: 'Calendar',
        value: '/calendar'
    },
    {
        name: 'Contacts',
        value: '/contacts'
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
        return navs.find((item) => item.value == (path ? path : '/'))?.value
    }

    return (
        <div className={'pb-4'}>
            <div className={'flex justify-between mb-4'}>
                <div className={'flex justify-center items-center'}>
                    <span className={'text-2xl mr-4 font-mono'}>Done</span>
                    <ProjectMenu data={data}/>
                </div>
                <div className={'flex justify-center items-center space-x-4'}>
                    <FeedBack/>
                    <Button variant={'ghost'} size={'icon'}>
                        <Bell size={20} />
                    </Button>
                    <Button variant={'ghost'} size={'icon'}>
                        <HelpCircle size={20} />
                    </Button>
                    <ProfileMenu data={data}/>
                </div>
            </div>
            <div className={'flex justify-start items-center space-x-8'}>
                {navs.map((item) => {
                    return (
                        <ShadowLink
                            active={getActive() === item.value}
                            href={`/dashboard${item.value}`}
                            name={item.name}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Header



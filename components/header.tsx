'use client'

import React from "react";
import {useSession} from "next-auth/react";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {Bell, HelpCircle} from "lucide-react";
import ProjectSwitcher from "@/components/project-switcher";
import ProfilePopover from "@/components/profile-popover";
import FeedBack from "@/components/feed-back";
import ShadowLink from "@/components/shadow-link";

export default function Header({navs, parentRoute}: any) {
    const {data}: any = useSession() || {}
    const pathname = usePathname()
    const getActive = () => {
        const path = pathname.split(parentRoute)[1]
        return navs.find((item: any) => item.value == (path ? path : '/'))?.value
    }
    return (
        <div className={'py-4 px-4 md:px-8'}>
            <div className={'flex justify-between mb-4'}>
                <div className={'flex justify-center items-center space-x-4'}>
                    <div className={'text-2xl font-mono'}>Done</div>
                    <div className={'text-2xl text-zinc-200 font-semibold rotate-12'}>/</div>
                    <div className={'flex justify-center items-center'}>
                        <Image
                            src={data?.user.image}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                            className={'rounded-full mr-2'}
                        />
                        <span>{data?.user.name}</span>
                    </div>
                    {/*todo 这个位置需要留一个切换用户的按钮*/}
                    {pathname.indexOf('dashboard') > -1 && <>
                      <div className={'text-2xl text-zinc-200 font-semibold rotate-12'}>/</div>
                      <ProjectSwitcher/>
                    </>}
                </div>
                <div className={'flex justify-center items-center space-x-4'}>
                    <FeedBack/>
                    <Button variant={'ghost'} size={'icon'}>
                        <Bell size={20}/>
                    </Button>
                    <Button variant={'ghost'} size={'icon'}>
                        <HelpCircle size={20}/>
                    </Button>
                    <ProfilePopover data={data}/>
                </div>
            </div>
            <div className={'flex justify-start items-center space-x-8'}>
                {navs.map((item: any) => {
                    const href = `/${parentRoute}${item.value}`
                    return (
                        <ShadowLink
                            active={getActive() === item.value}
                            href={href}
                            name={item.name}
                        />
                    )
                })}
            </div>
        </div>
    );
}

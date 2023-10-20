'use client'

import React from "react";
import {useSession} from "next-auth/react";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {Bell, HelpCircle} from "lucide-react";
import ProjectSwitcher from "@/components/project-switcher";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Textarea} from "@/components/ui/textarea";
import ProfileMenu from "@/components/profile-menu";

export default function Header({navs}: any) {
    const {data}: any = useSession() || {}
    const pathname = usePathname()

    return (
        <div className={'py-4 px-4 md:px-8'}>
            <div className={'flex justify-between mb-4'}>
                <div className={'flex justify-center items-center space-x-4'}>
                    <div className={'text-2xl font-mono'}>Done</div>
                    <div className={'text-2xl text-zinc-300 font-bold rotate-12'}>/</div>
                    <div className={'flex justify-center items-center'}>
                        <div className={'flex justify-center items-center mr-2'}>
                            <Image
                                src={data?.user.image}
                                alt="Picture of the author"
                                width={24}
                                height={24}
                                className={'rounded-full mr-1'}
                            />
                            <span>{data?.user.name}</span>
                        </div>
                        {/*<ProjectMenu data={data}/>*/}
                    </div>
                    {pathname.indexOf('dashboard') > -1 && <>
                      <div className={'text-2xl text-zinc-300 font-bold rotate-12'}>/</div>
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
                    <ProfileMenu data={data}/>
                </div>
            </div>
            {/*<div className={'flex justify-start items-center space-x-8'}>*/}
            {/*    {navs.map((item) => {*/}
            {/*        return (*/}
            {/*            <ShadowLink*/}
            {/*                active={getActive() === item.value}*/}
            {/*                href={`/dashboard${item.value}`}*/}
            {/*                name={item.name}*/}
            {/*            />*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
}

//问题反馈
const FeedBack = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={'outline'}>
                    问题反馈
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 space-y-4">
                <Textarea
                    className={'resize-none h-32'}
                    placeholder="Type your message here."
                />
                <div className={'flex justify-end items-center'}>
                    <Button>
                        提交
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}
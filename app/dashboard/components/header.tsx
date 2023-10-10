'use client'

import React from "react";
import {Button} from "@/components/ui/button";
import {useSession} from "next-auth/react";
import ProjectMenu from "@/app/dashboard/components/project-menu";
import ProfileMenu from "@/app/dashboard/components/profile-menu";

const Header = () => {
    const {data}: any = useSession() || {}

    return (
        <div className={'p-8'}>
            <div className={'flex justify-between'}>
                <div className={'flex justify-center items-center space-x-4'}>
                    <span className={'text-2xl font-mono'}>Done</span>
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
            </div>
        </div>
    );
}

export default Header



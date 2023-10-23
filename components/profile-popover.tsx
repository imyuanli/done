import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import {Home, Moon, Settings, Sun, SunMoon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {signOut} from "next-auth/react";
import {Skeleton} from "antd";
import React from "react";
import {useTheme} from "next-themes";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";

const ProfilePopover = ({data}: any) => {
    return (
        <>
            {
                data ?
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Image
                                src={data.user.image}
                                alt="Picture of the author"
                                width={36}
                                height={36}
                                className={'rounded-full cursor-pointer'}
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={'w-72'}>
                            <DropdownMenuLabel>
                                <div className={'flex flex-col space-y-2'}>
                                    <div className={'text-lg'}>{data.user.name}</div>
                                    <div className={'text-sm'}>{data.user.email}</div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <Link href={'/dashboard'}>
                                <DropdownMenuItem>
                                    Dashboard
                                    <DropdownMenuShortcut>
                                        <Icon icon={Home}/>
                                    </DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </Link>
                            <Link href={'/dashboard/settings'}>
                                <DropdownMenuItem>
                                    Settings
                                    <DropdownMenuShortcut>
                                        <Icon icon={Settings}/>
                                    </DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                Theme
                                <DropdownMenuShortcut>
                                    <ThemeSelect/>
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                <Button className={'w-full'} variant={'destructive'} onClick={() => signOut()}>
                                    Log out
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    :
                    <Skeleton.Avatar size={'large'} active/>
            }
        </>
    );
}

const Icon = ({icon}: any) => React.createElement(icon, {size: 16})

const ThemeSelect = () => {
    const {theme, setTheme} = useTheme()

    return (
        <Select value={theme} onValueChange={(value) => setTheme(value)}>
            <SelectTrigger>
                {theme == 'light' && <Icon icon={Sun}/>}
                {theme == 'dark' && <Icon icon={Moon}/>}
                {theme == 'system' && <Icon icon={SunMoon}/>}
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">
                    Light
                </SelectItem>
                <SelectItem value="dark">
                    Dark
                </SelectItem>
                <SelectItem value="system">
                    System
                </SelectItem>
            </SelectContent>
        </Select>
    )
}


export default ProfilePopover


import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import {Github, Home, Settings} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

const Profile = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image
                    src={'https://avatars.githubusercontent.com/u/27879323?v=4'}
                    alt="Picture of the author"
                    width={36}
                    height={36}
                    className={'rounded-full cursor-pointer'}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={'w-72'}>
                <DropdownMenuLabel>
                    <div className={'flex items-center text-lg mb-2'}>
                        <div className={'font-semibold mr-2'}>Jiayu Liu</div>
                        <Badge variant="secondary">
                            Free
                        </Badge>
                    </div>
                    <div className={'text-xs'}>2865437316@qq.com</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <Link href={'/dashboard'}>
                    <DropdownMenuItem>
                        Dashboard
                        <DropdownMenuShortcut>
                            <Home size={16}/>
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </Link>
                <Link href={'/dashboard/settings'}>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>
                            <Settings size={16}/>
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </Link>
                <Link href={''}>
                    <DropdownMenuItem>
                        Github
                        <DropdownMenuShortcut>
                            <Github size={16}/>
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                    <Button className={'w-full'} variant={'destructive'}>
                        Log out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}


export default Profile
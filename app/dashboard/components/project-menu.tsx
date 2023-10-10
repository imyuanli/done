'use client'

import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {ChevronsUpDown, PlusCircle} from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";
import {Skeleton} from "@/components/ui/skeleton";

const ProjectMenu = ({data}: any) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {
                    data ?
                        <Button variant="outline">
                            <div className={'mr-12 flex justify-center items-center'}>
                                <Image
                                    src={data?.user.image}
                                    alt="Picture of the author"
                                    width={24}
                                    height={24}
                                    className={'rounded-full mr-2'}
                                />
                                <span>{data?.user.name}</span>
                            </div>
                            <ChevronsUpDown size={16}/>
                        </Button>
                        :
                        <Skeleton className={'w-48 h-9'}/>
                }
            </PopoverTrigger>
            <PopoverContent className="min-w-[200px] w-full p-0">
                <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search..."/>
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Projects">
                            <CommandItem>
                                done1
                            </CommandItem>
                            <CommandItem>
                                done2
                            </CommandItem>
                            <CommandItem>
                                done3
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                    <CommandSeparator/>
                    <CommandList>
                        <CommandGroup>
                            <CommandItem>
                                <PlusCircle size={16} className={'mr-2'}/>
                                Create Team
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default ProjectMenu
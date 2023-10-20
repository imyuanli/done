import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ChevronsUpDown, PlusCircle} from "lucide-react";
import {Skeleton} from "@/components/ui/skeleton";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";
import React from "react";
import {useRequest} from "ahooks";
import {select_projects} from "@/service";
import {Avatar} from "antd";

const ProjectSwitcher = () => {
    const {data, loading} = useRequest(() => select_projects({searchVal: null}))
    return (
        <Popover>
            <PopoverTrigger asChild>
                {
                    loading ?
                        <Skeleton className={'w-48 h-9'}/>
                        :
                        <Button variant="outline">
                            <ChevronsUpDown size={16}/>
                        </Button>
                }
            </PopoverTrigger>
            <PopoverContent className="min-w-[200px] w-full p-0">
                <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search..."/>
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Projects">
                            {data?.map((item: any, index: number) => (
                                <CommandItem className={'space-x-4'}>
                                    {
                                        item.icon ?
                                            <Avatar src={item.icon}/>
                                            :
                                            <Avatar>{item.name.slice(0, 2)}</Avatar>
                                    }
                                    <span>{item.name}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                    <CommandSeparator/>
                    <CommandList>
                        <CommandGroup>
                            <CommandItem>
                                <PlusCircle size={16} className={'mr-2'}/>
                                新建项目
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default ProjectSwitcher
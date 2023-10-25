import {
    MoreVertical
} from "lucide-react";
import {Button} from "@/components/ui/button";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const OperateMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} size={"icon"}>
                    <MoreVertical size={16}/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    收藏
                </DropdownMenuItem>
                <DropdownMenuItem>
                    邀请成员
                </DropdownMenuItem>
                <DropdownMenuItem>
                    转移项目
                </DropdownMenuItem>
                <DropdownMenuItem>
                    查看日志
                </DropdownMenuItem>
                <DropdownMenuItem>
                    设置
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}


export default OperateMenu
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Activity} from "lucide-react";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";

const RatePopover = () => {
    return (
        <HoverCard openDelay={300} closeDelay={300}>
            <HoverCardTrigger asChild>
                <Button className={'rounded-full'} variant="outline" size={'icon'}>
                    <Activity size={20}/>
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                这里展示项目的基础进度
            </HoverCardContent>
        </HoverCard>
    );
}

export default RatePopover
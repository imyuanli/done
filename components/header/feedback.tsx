'use client'

import React from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

const feedback = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={'outline'}>
                    Feedback
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
    );
}


export default feedback
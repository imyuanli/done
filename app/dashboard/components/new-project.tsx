'use client'

import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import React from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import useSWRMutation from "swr/mutation";
import {useSession} from "next-auth/react";


const FormSchema = z.object({
    name: z.string().min(1, {message: '项目名称不能为空'}),
    description: z.string(),
    visibility: z.enum(['public', 'private'])
})

const sendRequest = async (url: string, {arg}: any) => {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arg)
    }).then(res => res.json())
}


const NewProject = () => {
    const { data: session, status } = useSession()

    console.log("data",session)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            description: '',
            visibility: 'public',
        }
    })

    const {trigger, data, isMutating}: any = useSWRMutation('/api/project/create', sendRequest)

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        console.log(data)
        await trigger(data)
    }

    return (
        <Form {...form}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>创建新项目</DialogTitle>
                    <DialogDescription>
                        添加一个新的项目
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className={'grid grid-cols-4 gap-4'}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem className={'col-span-3'}>
                                    <FormLabel>项目名称</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="请输入项目名称..."
                                            {...field}
                                            maxLength={15}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="visibility"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>隐私</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="public">公开</SelectItem>
                                            <SelectItem value="private">私密</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>项目描述</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="描述"
                                        className="resize-none h-40"
                                        {...field}
                                        maxLength={100}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <DialogFooter className={'space-x-2 flex justify-end items-center flex-row'}>
                        <Button variant={'outline'}>取消</Button>
                        <Button type={"submit"}>
                            {isMutating ? '创建中...' : '创建'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Form>
    );
}


export default NewProject
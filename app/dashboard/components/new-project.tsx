import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "@/components/ui/use-toast";
import Loading from "@/components/loading";
import {useRequest} from "ahooks";
import {create_project} from "@/service";

const FormSchema = z.object({
    name: z.string().min(1, {message: '项目名称不能为空'}),
    description: z.string(),
    visibility: z.enum(['public', 'private'])
})

const NewProject = ({children}: any) => {
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            description: '',
            visibility: 'public',
        }
    })
    const {loading, runAsync} = useRequest(create_project, {manual: true})

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const res = await runAsync(data)
        if (res.data) {
            toast({
                title: `${res.data.projectName}创建成功`,
            })
            setOpen(false)
            form.reset()
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>创建新项目</DialogTitle>
                    <DialogDescription>
                        添加一个新的项目
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
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
                            <Button
                                onClick={() => setOpen(false)}
                                variant={'outline'}
                            >
                                取消
                            </Button>
                            <Button type={"submit"}>
                                {loading ? <Loading/> : '创建'}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default NewProject
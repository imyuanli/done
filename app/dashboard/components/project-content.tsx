'use client'

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {Badge} from "@/components/ui/badge";
import {Archive, CalendarDays, LayoutGrid, LayoutList, Plus} from "lucide-react";
import {Input} from "@/components/ui/input";
import NewProject from "@/app/dashboard/components/new-project";
import {useDebounce, useRequest} from "ahooks";
import {select_projects} from "@/service";
import {Skeleton} from "antd";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const NotFount = () => {
    return (
        <div className={'col-span-3 flex flex-col justify-center items-center space-y-4'}>
            <div>
                <Archive size={48} />
            </div>
            <div className={'text-xl font-semibold'}>暂无项目</div>
            <div className={'text-base'}>
                开始创建你的第一个项目
            </div>
            <NewProject>
                <Button>
                    <Plus size={20}/>
                    <span>创建项目</span>
                </Button>
            </NewProject>
        </div>
    )
}

const ProjectContent = () => {
    const [searchVal, setSearchVal] = useState(null)
    const debouncedValue = useDebounce(searchVal, {wait: 500});
    const {data, loading} = useRequest(
        () => select_projects({searchVal: debouncedValue}),
        {
            refreshDeps: [debouncedValue],
        }
    )

    return (
        <Tabs defaultValue="card" className={'container space-y-8'}>
            <div className={'flex space-x-4 pt-8'}>
                <Input
                    className={'bg-white'}
                    placeholder={'Search...'}
                    onInput={(e: any) => {
                        setSearchVal(e.target.value)
                    }}
                />
                <TabsList>
                    <TabsTrigger value="card">
                        <LayoutGrid/>
                    </TabsTrigger>
                    <TabsTrigger value="list">
                        <LayoutList/>
                    </TabsTrigger>
                </TabsList>
                <NewProject>
                    <Button className={'aspect-square'} size={"icon"}>
                        <Plus/>
                    </Button>
                </NewProject>
            </div>
            <TabsContent className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`} value="card">
                {
                    loading ?
                        arr.map((index: number) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>
                                        <div className={'flex justify-between items-center'}>
                                            <div className={'flex  items-center'}>
                                                <Skeleton.Avatar className={'mr-2'} active/>
                                                <Skeleton.Input size={'small'} active/>
                                            </div>
                                            <Skeleton.Button size={'small'} active/>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className={'space-y-1'}>
                                    <Skeleton.Input size={'small'} active/>
                                    <Skeleton.Input size={'small'} block active/>
                                    <Skeleton.Input size={'small'} block active/>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Skeleton.Button size={'small'} active/>
                                    <Skeleton.Button size={'small'} active/>
                                </CardFooter>
                            </Card>
                        ))
                        :
                        data.length > 0 ?
                            data.map((item: any, index: number) => {
                                return (
                                    <Card key={index}>
                                        <CardHeader>
                                            <CardTitle>
                                                <span className={'mr-1'}>{item.name}</span>
                                                <Badge className={'rounded-full'} variant={'outline'}>
                                                    {item.visibility}
                                                </Badge>
                                            </CardTitle>
                                            <CardDescription>{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            fasfsaf
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <div>
                                                <CalendarDays/>
                                                {item?.createdAt}
                                            </div>
                                            <Button>Deploy</Button>
                                        </CardFooter>
                                    </Card>
                                )
                            })
                            :
                            <NotFount/>
                }
            </TabsContent>
            <TabsContent className={'grid grid-cols-1 gap-8'} value="list">
                {
                    loading ?
                        arr.map((index: number) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>
                                        <div className={'flex justify-between items-center'}>
                                            <div className={'flex  items-center'}>
                                                <Skeleton.Avatar className={'mr-2'} active/>
                                                <Skeleton.Input size={'small'} active/>
                                            </div>
                                            <Skeleton.Button size={'small'} active/>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className={'space-y-1'}>
                                    <Skeleton.Input size={'small'} active/>
                                    <Skeleton.Input size={'small'} block active/>
                                    <Skeleton.Input size={'small'} block active/>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Skeleton.Button size={'small'} active/>
                                    <Skeleton.Button size={'small'} active/>
                                </CardFooter>
                            </Card>
                        ))
                        :
                        data.length > 0 ?
                            data.map((item: any, index: number) => {
                                return (
                                    <Card key={index}>
                                        <CardHeader>
                                            <CardTitle>
                                                <span className={'mr-1'}>{item.name}</span>
                                                <Badge className={'rounded-full'} variant={'outline'}>
                                                    {item.visibility}
                                                </Badge>
                                            </CardTitle>
                                            <CardDescription>{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {item.description}
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <Button variant="outline">Cancel</Button>
                                            <Button>Deploy</Button>
                                        </CardFooter>
                                    </Card>
                                )
                            })
                            :
                            <NotFount/>
                }
            </TabsContent>
        </Tabs>
    );
}

export default ProjectContent



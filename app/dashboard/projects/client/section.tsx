'use client'

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React, {useEffect} from "react";
import Title from "@/components/title";
import {useDebounce, useRequest, useSetState} from "ahooks";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Archive, CalendarDays, LayoutGrid, LayoutList, Plus} from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "antd";
import {Badge} from "@/components/ui/badge";
import {get_project_list} from "@/service";
import CreateProject from "@/components/create-project";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const NotFount = () => {
    return (
        <div className={'col-span-3 flex flex-col justify-center items-center space-y-4 mt-24'}>
            <div>
                <Archive size={48}/>
            </div>
            <div className={'text-xl font-semibold'}>暂无项目</div>
            <div className={'text-base'}>
                开始创建你的第一个项目
            </div>
            <CreateProject>
                <Button>
                    <Plus size={20}/>
                    <span>创建项目</span>
                </Button>
            </CreateProject>
        </div>
    )
}

const Section = () => {
    const [state, setState] = useSetState<any>({
        activeKey: 'active',
        pageSize: 12,
        page: 1,
        projects: [],
        searchVal: '',
    })
    const {activeKey, page, pageSize, projects, searchVal} = state
    const debouncedSearchVal = useDebounce(searchVal, {wait: 200});

    const {data, loading} = useRequest(
        () => get_project_list({keywords: debouncedSearchVal, activeKey, page, pageSize}),
        {refreshDeps: [debouncedSearchVal, activeKey, page]}
    )

    //如果更换tab就清空
    useEffect(() => {
        setState({
            projects: [],
            page: 1,
            searchVal: ''
        })
    }, [activeKey]);
    useEffect(() => {
        setState({
            projects: [],
            page: 1
        })
    }, [debouncedSearchVal]);

    //如果data变化
    useEffect(() => {
        if (data?.projects) {
            const res = ()=>{}
            setState({
                projects: Array.from(new Set([...projects, ...data?.projects]))
            })
        }
    }, [data]);

    return (
        <Tabs
            defaultValue="active"
            value={activeKey}
            onValueChange={(value) => {
                setState({
                    activeKey: value
                })
            }}
            className={'space-y-8'}
        >
            <Title title={'Projects'}>
                <TabsList>
                    <TabsTrigger value="active">
                        进行中
                    </TabsTrigger>
                    <TabsTrigger value="file">
                        已归档
                    </TabsTrigger>
                    <TabsTrigger value="recycle">
                        已回收
                    </TabsTrigger>
                </TabsList>
            </Title>
            <Tabs defaultValue="card" className={'space-y-8'}>
                <div className={'flex space-x-4'}>
                    <Input
                        className={'bg-white'}
                        placeholder={'Search...'}
                        onInput={(e: any) => {
                            setState({
                                searchVal: e.target.value
                            })
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
                    <CreateProject>
                        <Button className={'aspect-square'} size={"icon"}>
                            <Plus/>
                        </Button>
                    </CreateProject>
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
                            projects.length > 0 ?
                                projects.map((item: any, index: number) => {
                                    return (
                                        <Card key={index}>
                                            <CardHeader>
                                                <CardTitle>
                                                    <span className={'mr-1'}>{item.name}</span>
                                                    <Badge className={'rounded-full mr-1'} variant={'outline'}>
                                                        {item.visibility}
                                                    </Badge>
                                                    <Badge className={'rounded-full'}>
                                                        {item.status}
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
                            projects.length > 0 ?
                                projects.map((item: any, index: number) => {
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
            {(data && data?.hasNextPage) && <Button
              onClick={() => {
                  setState({
                      page: page + 1
                  })
              }}
              variant={"outline"}
              className={'w-full'}
            >
                {loading ? '加载中...' : '加载更多'}
            </Button>}
        </Tabs>
    );
}


export default Section
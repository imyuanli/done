'use client'

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React, {useEffect} from "react";
import Title from "@/components/title";
import {useDebounce, useRequest, useSetState} from "ahooks";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    Archive,
    CalendarDays,
    LayoutGrid,
    LayoutList,
    LockKeyhole,
    Plus,
    UnlockKeyhole
} from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "antd";
import {Badge} from "@/components/ui/badge";
import {get_project_list} from "@/service";
import CreateProject from "@/components/create-project";
import ProjectAvatar from "@/components/project-avatar";
import dayjs from "dayjs";
import OperateMenu from "@/app/dashboard/projects/client/operate-menu";
import RatePopover from "@/app/dashboard/projects/client/rate-popover";

const arr = [1, 2, 3, 4, 5, 6]
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

const MoreMenu=()=>{
    return(
        <div className={'space-x-2'}>
            <RatePopover/>
            <OperateMenu/>
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
            const res = () => {
            }
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
            <Tabs defaultValue="list" className={'space-y-8'}>
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
                                        <Card className={'hover:shadow-lg duration-200 cursor-pointer'} key={index}>
                                            <CardHeader className={'flex flex-row items-center space-x-4 space-y-0'}>
                                                <ProjectAvatar icon={item.icon} name={item.name}/>
                                                <div className={'flex-1'}>
                                                    <CardTitle className={'flex items-center justify-between'}>
                                                        <span className={'mr-1'}>{item.name}</span>
                                                        <Badge className={'rounded-full mr-1'} variant={'outline'}>
                                                            {
                                                                item.visibility == 'public' ?
                                                                    <UnlockKeyhole size={16}/>
                                                                    :
                                                                    <LockKeyhole size={16}/>
                                                            }
                                                        </Badge>
                                                    </CardTitle>
                                                    <CardDescription>{item.description}</CardDescription>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                这个地方打算展示项目的一些信息 比如 项目创建者 项目创建时间 项目最后更新时间
                                                项目的一些标签
                                            </CardContent>
                                            <CardFooter className="flex justify-between">
                                                <div className={'flex justify-center items-center text-sm'}>
                                                    <CalendarDays size={16} className={'mr-1'}/>
                                                    {dayjs(item?.createdAt).format('YYYY-MM-DD')}
                                                </div>
                                                <MoreMenu/>
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
                                <Card className={'flex justify-center items-center'} key={index}>
                                    <CardHeader className={'p-4 flex-1 flex flex-row items-center space-x-4 space-y-0'}>
                                        <Skeleton.Avatar className={'mr-2'} active/>
                                        <div className={'flex-1'}>
                                            <CardTitle className={'flex items-center mb-1'}>
                                                <Skeleton.Input className={'mr-1'} size={'small'} active/>
                                                <Skeleton.Button size={'small'} active/>
                                            </CardTitle>
                                            <CardDescription>
                                                <Skeleton.Input size={'small'} block active/>
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className={'p-4 flex-1 space-y-1'}>
                                        <Skeleton.Input size={'small'} block active/>
                                        <Skeleton.Input size={'small'} block active/>
                                    </CardContent>
                                    <CardFooter className="p-4 flex-1 flex justify-end items-center space-x-4">
                                        <Skeleton.Button size={'small'} active/>
                                        <Skeleton.Button size={'small'} active/>
                                    </CardFooter>
                                </Card>
                            ))
                            :
                            projects.length > 0 ?
                                projects.map((item: any, index: number) => {
                                    return (
                                        <Card className={'flex justify-center items-center'} key={index}>
                                            <CardHeader
                                                className={'p-4 flex-1 flex flex-row items-center space-x-4 space-y-0'}>
                                                <ProjectAvatar icon={item.icon} name={item.name}/>
                                                <div className={'flex-1'}>
                                                    <CardTitle className={'flex items-center'}>
                                                        <span className={'mr-2'}>{item.name}</span>
                                                        <Badge className={'rounded-full'} variant={'outline'}>
                                                            {item.visibility}
                                                        </Badge>
                                                    </CardTitle>
                                                    <CardDescription>{item.description}</CardDescription>
                                                </div>
                                            </CardHeader>
                                            <CardContent className={'p-4 flex-1'}>
                                                这个地方打算展示项目的一些信息 比如 项目创建者 项目创建时间 项目最后更新时间
                                                项目的一些标签
                                            </CardContent>
                                            <CardFooter className="p-4 flex-1 flex justify-end items-center space-x-4">
                                                <div className={'flex justify-center items-center text-sm'}>
                                                    <CalendarDays size={16} className={'mr-1'}/>
                                                    {dayjs(item?.createdAt).format('YYYY-MM-DD')}
                                                </div>
                                                <MoreMenu/>
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
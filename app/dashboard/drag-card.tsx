'use client'
import {Responsive, WidthProvider} from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {GripVertical} from "lucide-react";

const ResponsiveGridLayout = WidthProvider(Responsive);

const DragCard = () => {

    const layout = [
        {i: "置顶项目", x: 0, y: 0, w: 6, h: 3, minW: 6, maxW: 12, minH: 3, maxH: 6},
        {i: "我的工作项", x: 6, y: 3, w: 6, h: 3, minW: 6, maxW: 12, minH: 3, maxH: 6},
        {i: "个人数据概览", x: 0, y: 6, w: 12, h: 2, minW: 4, maxW: 12, minH: 3, maxH: 6},
        // {i: "", x: 6, y: 0, w: 6, h: 3, minW: 6, maxW: 12, minH: 3, maxH: 6},想给你
        // {i: "我的周报", x: 0, y: 6, w: 6, h: 3, minW: 4, maxW: 12, minH: 3, maxH: 6},
        // {i: "我的任务项", x: 0, y: 6, w: 6, h: 3, minW: 4, maxW: 12, minH: 3, maxH: 6},
        // {i: "我的行程", x: 0, y: 6, w: 6, h: 3, minW: 4, maxW: 12, minH: 3, maxH: 6},
    ];


    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={{lg: layout}}
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            draggableHandle=".react-grid-dragHandleExample"
        >
            {
                layout.map((item) => {
                    return (
                        <Card key={item.i}>
                            <CardHeader className={'react-grid-dragHandleExample cursor-grab'}>
                                <CardTitle>
                                    <GripVertical className={'mr-2'}/>
                                    {item.i}
                                </CardTitle>
                                <CardDescription>
                                    模块描述
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className={'flex justify-between'}>
                                    <div>
                                        <div className={'text-2xl font-semibold'}>
                                            0
                                        </div>
                                        <div className={'text-sm text-muted-foreground'}>
                                            今日新增
                                        </div>
                                    </div>
                                    <div>
                                        <div className={'text-2xl font-semibold'}>
                                            0
                                        </div>
                                        <div className={'text-sm text-muted-foreground'}>
                                            今日新增
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>
                                    添加模块
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })
            }
        </ResponsiveGridLayout>
    );
}


export default DragCard
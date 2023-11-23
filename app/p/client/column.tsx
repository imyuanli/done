import {
    Draggable,
    DraggableProvided,
    Droppable, DroppableProvided,
} from "react-beautiful-dnd";
import React from "react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {MoreHorizontal, Plus} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import TaskDetails from "@/app/p/client/task-details";

interface ColumnProps {
    index: number,
    list: any
}

const Column: React.FunctionComponent<ColumnProps> = ({index, list}) => {
    return (
        <Draggable key={list?.id} draggableId={list?.id} index={index}>
            {(provided: DraggableProvided) => (
                <Card
                    className="w-[320px] h-fit"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <CardHeader {...provided.dragHandleProps}>
                        <CardTitle className={'flex items-center justify-between'}>
                            <div>
                                <span className={''}>{list?.title}</span>
                                <span>（{list.items.length}）</span>
                            </div>
                            <Button variant={'ghost'} size={'icon'}>
                                <MoreHorizontal size={20}/>
                            </Button>
                        </CardTitle>
                        <Separator/>
                    </CardHeader>
                    <CardContent>
                        <Button variant={'outline'} className={'w-full mb-4'}>
                            <Plus size={20} className={'mr-2'}/>
                        </Button>
                        <Droppable droppableId={list?.id} type={'TASK'}>
                            {(dropProvided: DroppableProvided) => (
                                <div
                                    ref={dropProvided.innerRef}
                                    {...dropProvided.droppableProps}
                                    className={'space-y-4'}
                                >
                                    {list?.items.map((item: any, index: number) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(dragProvided: DraggableProvided) => (
                                                <Dialog>
                                                    <div
                                                        ref={dragProvided.innerRef}
                                                        {...dragProvided.draggableProps}
                                                        {...dragProvided.dragHandleProps}
                                                    >
                                                        <Card className={'w-full'}>
                                                            <DialogTrigger asChild>
                                                                <CardHeader>
                                                                    <CardTitle className={'flex items-center'}>
                                                                        <span className={'ml-2'}>{item.content}</span>
                                                                    </CardTitle>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <div
                                                                        className={'flex justify-between items-center'}>
                                                                        <div
                                                                            className={'text-sm text-zinc-300'}>2021-10-10
                                                                        </div>
                                                                        <Button variant={'ghost'} size={'icon'}>
                                                                            <MoreHorizontal size={20}/>
                                                                        </Button>
                                                                    </div>
                                                                </CardContent>
                                                            </DialogTrigger>
                                                        </Card>
                                                    </div>
                                                    <DialogContent className="sm:max-w-[425px]">
                                                        <TaskDetails/>
                                                    </DialogContent>
                                                </Dialog>
                                            )}
                                        </Draggable>
                                    ))}
                                    {dropProvided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </CardContent>
                </Card>
            )}
        </Draggable>
    );
}


export default Column
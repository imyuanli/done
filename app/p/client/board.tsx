'use client'

import {DragDropContext, Droppable, DroppableProvided} from 'react-beautiful-dnd';
import Column from "@/app/p/client/column";
import {useState} from "react";
import {nanoid} from "nanoid";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

const Board = () => {
    const [taskList, setTaskList] = useState<any>([
        {
            id: '1231231',
            title: 'To do',
            items: [
                {
                    id: '1',
                    content: 'First task'
                },
                {
                    id: '2',
                    content: 'Second task'
                },
                {
                    id: '3',
                    content: 'Third task'
                },
            ]
        },
        {
            id: '1241242',
            title: 'In progress',
            items: [
                {
                    id: '4',
                    content: 'Fourth task'
                },
                {
                    id: '6',
                    content: 'Sixth task'
                },
            ]
        },
        {
            id: '1251253',
            title: 'Done',
            items: []
        }
    ])

    const onDragEnd = (result: any) => {
        const {type, source, destination} = result || {}
        if (type == 'TASK') {
            const {index: sourceIndex, droppableId: sourceDroppableId} = source || {}
            const {index: destinationIndex, droppableId: destinationDroppableId} = destination || {}
            const sourceList = taskList.find((item: any) => item.id == sourceDroppableId)
            const destinationList = taskList.find((item: any) => item.id == destinationDroppableId)
            const [removed] = sourceList.items.splice(sourceIndex, 1);
            destinationList.items.splice(destinationIndex, 0, removed);
            setTaskList([...taskList])
        }
        if (type == 'COLUMN') {
            const {index: sourceIndex} = source || {}
            const {index: destinationIndex} = destination || {}
            const [removed] = taskList.splice(sourceIndex, 1);
            taskList.splice(destinationIndex, 0, removed);
            setTaskList([...taskList])
        }
    }

    return (
        <div className={'flex overflow-auto h-full'}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable
                    droppableId={nanoid()}
                    type="COLUMN"
                    direction="horizontal"
                >
                    {(provided: DroppableProvided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={'flex space-x-4'}
                        >
                            {taskList.map((list: any, index: number) => (
                                <Column index={index} list={list}/>
                            ))}

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <AddTaskList/>
        </div>
    );
}

const AddTaskList = () => {
    const handleAddTask = () => {

    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className={'whitespace-nowrap'} variant={'ghost'}>
                    <Plus size={20} className={'mr-2'}/>
                    新建任务列表
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
            </PopoverContent>
        </Popover>
    )
}

export default Board
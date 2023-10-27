'use client'

import {DragDropContext, Droppable, DroppableProvided} from 'react-beautiful-dnd';
import Column from "@/app/p/client/column";
import {useState} from "react";
import {nanoid} from "nanoid";

const Board = () => {
    const [taskList, setTaskList] = useState<any>([
        {
            id: '1',
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
            id: '2',
            title: 'In progress',
            items: [
                {
                    id: '4',
                    content: 'Fourth task'
                },
                {
                    id: '5',
                    content: 'Fifth task'
                },
                {
                    id: '6',
                    content: 'Sixth task'
                },
            ]
        }
    ])

    const onDragEnd = (result: any) => {

    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
                droppableId={nanoid()}
                type="COLUMN"
                direction="horizontal"
            >
                {(provided: DroppableProvided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {taskList.map((list: any, index: number) => (
                            <Column index={index} list={list}/>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}


export default Board
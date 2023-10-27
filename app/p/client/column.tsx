import {
    Draggable,
    DraggableProvided,
    Droppable, DroppableProvided,
} from "react-beautiful-dnd";
import React from "react";

interface ColumnProps {
    index: number,
    list: any
}

const Column: React.FunctionComponent<ColumnProps> = ({index, list}) => {
    return (
        <Draggable key={list?.id} draggableId={list?.id} index={index}>
            {(dragProvided: DraggableProvided) => (
                <div>
                    <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        className={'text-xl p-4 w-10'}
                    >
                        {list?.title}
                    </div>
                    <Droppable droppableId={list?.id}>
                        {(itemDropProvided: DroppableProvided) => (
                            <div ref={itemDropProvided.innerRef} {...itemDropProvided.droppableProps}>
                                {list?.items.map((item: any, index: number) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(itemDragProvided: DraggableProvided,) => (
                                            <div className={'p-8 bg-amber-500'}
                                                 ref={itemDragProvided.innerRef}
                                                 {...itemDragProvided.draggableProps}
                                                 {...itemDragProvided.dragHandleProps}
                                            >
                                                <div>{item.id}</div>
                                                <div>{item.content}</div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {itemDropProvided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
}


export default Column
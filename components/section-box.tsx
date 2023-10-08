'use client'

import React from "react";

interface SectionBoxProps {
    id: string,
    children: React.ReactNode,
    className?: string
}

const SectionBox: React.FunctionComponent<SectionBoxProps> = ({id, children,className}) => {
    return (
        <section id={id} className={`py-24 w-full flex flex-col justify-center items-center space-y-8`}>
            {children}
        </section>
    );
}


export default SectionBox
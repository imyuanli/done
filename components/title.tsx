import React from "react";

const Title = ({title, children}: any) => {
    return (
        <div className={'w-full flex justify-between items-center'}>
            <div className={'text-4xl font-semibold '}>{title}</div>
            {children}
        </div>
    );
}

export default Title
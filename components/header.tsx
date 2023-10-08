'use client'

import {Github} from "lucide-react";

const Header = () => {
    return (
        <header className={'flex justify-between items-center w-full max-w-6xl px-4 pt-8'}>
            <div className={'text-2xl font-mono'}>Done</div>
            <div className={'flex justify-center items-center space-x-8'}>
                <div>Home</div>
                <div>Features</div>
                <div>Planning</div>
                <div>Pricing</div>
                <div>FAQ</div>
            </div>
            <Github className={'cursor-pointer'}/>
        </header>
    );
}


export default Header
'use client'

import SectionBox from "@/components/section-box";
import {Button} from "@/components/ui/button";
import {ArrowDown, ArrowRight} from "lucide-react";
import {useEffect, useState} from "react";

const linearArr = [
    'linear-gradient(90deg, #007cf0,#00dfd8)',
    'linear-gradient(90deg, #7928ca, #ff0080)',
    'linear-gradient(90deg, #ff4d4d, #f9cb28)',
]

const shadowArr = [
    '#00dfd8',
    '#ff0080',
    '#f9cb28'
]

const Main = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((current + 1) % 3)
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    })

    return (
        <SectionBox id={'home'}>
            <div
                className={'rounded-full space-x-2 border-zinc-300 border px-4 py-1 text-sm cursor-pointer hover:border-zinc-400'}>
                <span className={'font-bold'}>We're Open Source</span>
                <span>|</span>
                <span>Star us on GitHub</span>
            </div>
            <div className={'text-center text-4xl font-extrabold  text-gray-900 sm:text-6xl'}>
                <div>Redefining.</div>
                <div>Project Management Tools.</div>
                <div className={'bg-clip-text text-transparent transition duration-500 ease-in-out'}
                     style={{
                         backgroundImage: linearArr[current],
                     }}>
                    with Done.
                </div>
            </div>
            <div className={'text-lg text-gray-600 font-medium text-center'}>
                Done is a project management tool that helps you organize your projects and tasks in a simple
                and intuitive way.
            </div>
            <div className={'flex justify-center items-center space-x-12'}>
                <Button size={'lg'}>
                    Features
                    <ArrowDown className="ml-2"/>
                </Button>
                <div
                    className={'transition duration-500 ease-in-out'}
                    style={{
                        boxShadow: `0 10px 150px 15px ${shadowArr[current]}`
                    }}
                >
                    <Button size={'lg'} variant={'outline'}>
                        Join Waitlist
                        <ArrowRight className="ml-2"/>
                    </Button>
                </div>
            </div>
        </SectionBox>
    );
}


export default Main
'use client'

import SectionBox from "@/components/section-box";
import {Button} from "@/components/ui/button";
import {ArrowDown, ArrowRight, Star} from "lucide-react";
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {siteData} from "@/lib/constant";

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

const textBg = 'bg-clip-text text-transparent transition duration-500 ease-in-out'

const HomePage = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((current + 1) % 3)
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    })

    const getBgImage = (index: number) => {
        return {
            backgroundImage: current == index ? linearArr[current] : 'none',
            color: current == index ? 'transparent' : 'inherit'
        }
    }

    return (
        <SectionBox id={'home'}>
            <Link href={siteData.github}>
                <div
                    className={'flex justify-center items-center rounded-full space-x-2 border-zinc-300 border px-4 py-2 text-sm hover:border-zinc-500 duration-200'}>
                    <div className={'font-bold'}>We're Open Source</div>
                    <div>|</div>
                    <div className={'flex justify-center items-center space-x-1'}>
                        <span>Star us on GitHub</span>
                        <Star size={14}/>
                    </div>
                </div>
            </Link>
            <div className={'text-center text-5xl font-extrabold text-gray-900 sm:text-6xl'}>
                <div className={textBg} style={getBgImage(0)}>Create.</div>
                <div className={textBg} style={getBgImage(1)}>Management.</div>
                <div className={textBg} style={getBgImage(2)}>Done.</div>
            </div>
            <div className={'text-lg text-gray-600 font-medium text-center max-w-2xl'}>
                Done is a project management tool that helps you organize your projects and tasks in a simple and
                intuitive way.
            </div>
            <div className={'flex justify-center items-center flex-col space-y-8 w-full md:flex-row md:space-y-0 md:space-x-12 md:w-fit'}>
                <Button className={'w-full'} size={'lg'}>
                    Features
                    <ArrowDown className="ml-2"/>
                </Button>
                <Button
                    className={'w-full transition duration-500 ease-in-out'}
                    style={{
                        boxShadow: `0 10px 120px 4px ${shadowArr[current]}`
                    }}
                    size={'lg'}
                    variant={'outline'}
                >
                    Join Waitlist
                    <ArrowRight className="ml-2"/>
                </Button>
            </div>
            <div>
                <div className={'bg-gray-200 border-2 p-4 rounded-lg mt-8'}>
                    <Image
                        width={1200}
                        height={800}
                        src={'/screen.png'}
                        alt={'screen'}
                        className={'rounded-md'}
                    />
                </div>
            </div>
        </SectionBox>
    );
}


export default HomePage
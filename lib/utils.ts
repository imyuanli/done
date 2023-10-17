import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {NextResponse} from "next/server";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const ok = (data: any) => {
    return NextResponse.json({
        code: 200,
        message: "ok",
        data
    })
}
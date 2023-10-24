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


//没有权限
export const noAuth = () => {
    return NextResponse.json({
        code: 403,
        message: "没有权限",
    })
}

//没有登录
export const noLogin = () => {
    return NextResponse.json({
        code: 401,
        message: "没有登录",
    })
}

//参数错误
export const paramsError = () => {
    return NextResponse.json({
        code: 400,
        message: "参数错误",
    })
}

//服务器错误
export const serverError = () => {
    return NextResponse.json({
        code: 500,
        message: "网络有点波动，请稍后再试",
    })
}

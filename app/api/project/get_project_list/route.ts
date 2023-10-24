import {ok} from "@/lib/utils";
import {getToken} from "next-auth/jwt";
import prisma from "@/lib/prisma";

export async function POST(request: any) {
    const token = await getToken({req: request})
    let {keywords, activeKey, page, pageSize}: any = await request.json()
    let status = activeKey ? activeKey : 'active'

    // 获取当前页的数据
    const skip: number = (page - 1) * pageSize;
    const projects = await prisma.project.findMany({
        skip,
        take: pageSize,
        where: {
            name: {contains: keywords},
            createdById: token?.sub,
            status,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    // 获取总记录数
    const totalCount = await prisma.project.count({
        where: {
            name: {contains: keywords},
            createdById: token?.sub,
            status,
        }
    })

    // 判断是否还有下一页
    const hasNextPage = totalCount > page * pageSize;

    return ok({
        projects,
        hasNextPage,
    })
}
import {ok} from "@/lib/utils";
import {getToken} from "next-auth/jwt";
import prisma from "@/lib/prisma";

export async function POST(request: any) {
    const token = await getToken({req: request})
    const {searchVal} = await request.json()
    let factor = searchVal?
        {
            name: {contains: searchVal},
            createdById: token?.sub,
        }
        :
        {createdById: token?.sub}
    const projectList = await prisma.project.findMany({
        where: {
            AND: [
                factor,
                {
                    NOT: {
                        status: 'file',
                    },
                },
            ],
        },
        orderBy: {
            createdAt: 'desc',
        },
    })
    return ok(projectList)
}
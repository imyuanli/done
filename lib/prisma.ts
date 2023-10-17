import {PrismaClient} from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    let globalAny: any = global;
    if (!globalAny.prisma) {
        globalAny.prisma = new PrismaClient();
    }
    prisma = globalAny.prisma;
}

export default prisma;
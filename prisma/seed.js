import { PrismaClient } from '@prisma/client'

const  prismaClient = new PrismaClient()

async function createRoute() {
    try {
        await prismaClient.route.create({
            data: {
                name: 'Test Post',
                type: 'Paved',
                miles: 10.0,
                startPoint: 'starting point',
                endPoint: 'end poing',
                startingElevation: 10,
                finalElevation: 200,
            }
        })
    } catch(err) {
    console.log(err)
    }
}

async function main() {
    try {
        await createRoute()
    }
    catch(err){
        console.log(err)
    }
}

main()
.catch(e => console.error(e))
.finally(async () => {
    await prismaClient.disconnect()
})
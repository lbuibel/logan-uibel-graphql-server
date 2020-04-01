import { idArg, mutationType, stringArg, intArg, floatArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {

        t.crud.deleteOneRoute()
        
        t.field('createRoute', {
            type: 'Route',
            args: {
                name: stringArg({ nullable: false }),
                type: stringArg(),
                miles: floatArg(),
                startPoint: stringArg(),
                endPoint: stringArg(),
                startingElevation: intArg(),
                finalElevation: intArg(),
                iframeData: stringArg(),
            },
            resolve: (parent, { name, type, miles, startPoint, endPoint, startingElevation, finalElevation, iframeData }, ctx) => {
                return ctx.prisma.route.create({
                    data: {
                        name,
                        type,
                        miles,
                        startPoint,
                        endPoint,
                        startingElevation,
                        finalElevation,
                        iframeData,
                    }
                })
            }
        })

        t.field('updateRoute', {
            type: 'Route',
            args: { 
                id: idArg(),
                name: stringArg(),
                type: stringArg(),
                miles: floatArg(),
                startPoint: stringArg(),
                endPoint: stringArg(),
                startingElevation: intArg(),
                finalElevation: intArg(),
                iframeData: stringArg(),  
            },
            resolve: (parent, {id, name, type, miles, startPoint, endPoint, startingElevation, finalElevation, iframeData}, ctx) => {
                return ctx.prisma.route.update({
                    where: {
                        id
                    },
                    data: {
                        name,
                        type,
                        miles,
                        startPoint,
                        endPoint,
                        startingElevation,
                        finalElevation,
                        iframeData,
                    }
                })
            }
        })
    }
})


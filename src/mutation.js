import { idArg, mutationType, stringArg, intArg, floatArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {

        t.crud.deleteOneRoute()
        t.crud.udpateOneRoute()
        
        t.field('createRoute', {
            type: 'Route',
            args: {
                name: stringArg({ nullable: false }),
                type: stringArg(),
                miles: floatArg(),
                startingElevation: intArg(),
                finalElevation: intArg(),
                iframeData: stringArg(),
            },
            resolve: (parent, { name, type, miles, startingElevation, finalElevation, iframeData }, ctx) => {
                return ctx.prisma.route.create({
                    data: {
                        name,
                        type,
                        miles,
                        startingElevation,
                        finalElevation,
                        iframeData,
                    }
                })
            }
        })
    }
})


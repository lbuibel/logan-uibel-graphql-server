import { idArg, mutationType, stringArg, intArg, floatArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
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
    }
})


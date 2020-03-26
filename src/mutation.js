import { idArg, mutationType, stringArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.field('createRoute', {
            type: 'Route',
            args: {
                name: stringArg({ nullable: false }),
                type: stringArg({ nullable: false }),
                type: stringArg({ nullable: false }),
                miles: stringArg({ nullable: false }),
                startPoint: stringArg({ nullable: false }),
                endPoint: stringArg({ nullable: false }),
                startingElevation: stringArg({ nullable: false }),
                finalElevation: stringArg({ nullable: false }),
            },
            resolve: (parent, { name, type, miles, startPoint, endPoint, startingElevation, finalElevation }, ctx) => {
                return ctc.prisma.route.create({
                    data: {
                        name,
                        type,
                        miles,
                        startPoint,
                        endPoint,
                        startingElevation,
                        finalElevation,
                    }
                })
            }
        })
    }
})


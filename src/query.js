import { idArg, queryType, stringArg } from 'nexus'

// RETURNS ROUTE BASED ON ID
export const Query = queryType({
  definition(t) {
    t.field('Route', {
      type: 'Route',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.route.findOne({
          where: {
            id,
          },
        })
      }
    })

    // SEARCHABLE ROUTES BASED ON PARAMETER
    t.list.field('Routes', {
      type: 'Route',
      args: {
        searchString: stringArg({ nullable: true}),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.route.findMany({
          where: {
            OR: [
              { name: { contains: searchString }},
            ],
          },
        })
      }
    })
  }
})
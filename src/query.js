import { idArg, queryType, stringArg } from 'nexus'

// RETURNS ROUTE BASED ON ID
export const Query = queryType({
  definition(t) {

    // GET ONE ROUTE
    t.crud.route()

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
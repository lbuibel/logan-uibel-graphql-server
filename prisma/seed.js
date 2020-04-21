import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const bike_routes = fs.readFileSync('prisma/seed_files/route_data.json')

function loadBikeRoutes() {
  const routeCatalog = JSON.parse(bike_routes)
  const routes = routeCatalog.routes
  return routes.map(route => {
    return {
      data: {
        name: route.name,
        type: route.type,
        miles: route.miles,
        startingElevation: route.startingElevation,
        finalElevation: route.finalElevation,
        iframeData: route.iframeData
      },
    }
  })
}

async function main() {
  try {
    const allRoutes = loadBikeRoutes()
    for (let rt of allRoutes) {
        await prismaClient.route.create(rt)
        .catch(err => console.log(`Error creating bike route ${err}`))
    }
  } catch (err) {
    console.log(err)
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prismaClient.disconnect()
  })

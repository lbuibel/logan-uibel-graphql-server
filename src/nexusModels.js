import { objectType } from 'nexus'

const Route = objectType({
    name: 'Route',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.name()
        t.model.type()
        t.model.miles()
        t.model.startPoint()
        t.model.endPoint()
        t.model.startingElevation()
        t.model.finalElevation()
        t.model.iframeData()
    }
})

export const Models = [
    Route
]
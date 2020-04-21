/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  RouteUpdateInput: { // input type
    createdAt?: any | null; // DateTime
    finalElevation?: number | null; // Int
    id?: string | null; // String
    iframeData?: string | null; // String
    miles?: number | null; // Float
    name?: string | null; // String
    startingElevation?: number | null; // Int
    type?: string | null; // String
    updatedAt?: any | null; // DateTime
  }
  RouteWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Query: {};
  Route: prisma.Route;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  RouteUpdateInput: NexusGenInputs['RouteUpdateInput'];
  RouteWhereUniqueInput: NexusGenInputs['RouteWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createRoute: NexusGenRootTypes['Route']; // Route!
    deleteOneRoute: NexusGenRootTypes['Route'] | null; // Route
    updateOneRoute: NexusGenRootTypes['Route'] | null; // Route
  }
  Query: { // field return type
    route: NexusGenRootTypes['Route'] | null; // Route
    Routes: NexusGenRootTypes['Route'][]; // [Route!]!
  }
  Route: { // field return type
    createdAt: any; // DateTime!
    finalElevation: number; // Int!
    id: string; // String!
    iframeData: string; // String!
    miles: number; // Float!
    name: string; // String!
    startingElevation: number; // Int!
    type: string; // String!
    updatedAt: any; // DateTime!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createRoute: { // args
      finalElevation?: number | null; // Int
      iframeData?: string | null; // String
      miles?: number | null; // Float
      name: string; // String!
      startingElevation?: number | null; // Int
      type?: string | null; // String
    }
    deleteOneRoute: { // args
      where: NexusGenInputs['RouteWhereUniqueInput']; // RouteWhereUniqueInput!
    }
    updateOneRoute: { // args
      data: NexusGenInputs['RouteUpdateInput']; // RouteUpdateInput!
      where: NexusGenInputs['RouteWhereUniqueInput']; // RouteWhereUniqueInput!
    }
  }
  Query: {
    route: { // args
      where: NexusGenInputs['RouteWhereUniqueInput']; // RouteWhereUniqueInput!
    }
    Routes: { // args
      searchString?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Query" | "Route";

export type NexusGenInputNames = "RouteUpdateInput" | "RouteWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}
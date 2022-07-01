/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateSpecialAbilityArgs } from "./CreateSpecialAbilityArgs";
import { UpdateSpecialAbilityArgs } from "./UpdateSpecialAbilityArgs";
import { DeleteSpecialAbilityArgs } from "./DeleteSpecialAbilityArgs";
import { SpecialAbilityFindManyArgs } from "./SpecialAbilityFindManyArgs";
import { SpecialAbilityFindUniqueArgs } from "./SpecialAbilityFindUniqueArgs";
import { SpecialAbility } from "./SpecialAbility";
import { SpecialAbilityService } from "../specialAbility.service";

@graphql.Resolver(() => SpecialAbility)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SpecialAbilityResolverBase {
  constructor(
    protected readonly service: SpecialAbilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SpecialAbility",
    action: "read",
    possession: "any",
  })
  async _specialAbilitiesMeta(
    @graphql.Args() args: SpecialAbilityFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SpecialAbility])
  @nestAccessControl.UseRoles({
    resource: "SpecialAbility",
    action: "read",
    possession: "any",
  })
  async specialAbilities(
    @graphql.Args() args: SpecialAbilityFindManyArgs
  ): Promise<SpecialAbility[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SpecialAbility, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SpecialAbility",
    action: "read",
    possession: "own",
  })
  async specialAbility(
    @graphql.Args() args: SpecialAbilityFindUniqueArgs
  ): Promise<SpecialAbility | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SpecialAbility)
  @nestAccessControl.UseRoles({
    resource: "SpecialAbility",
    action: "create",
    possession: "any",
  })
  async createSpecialAbility(
    @graphql.Args() args: CreateSpecialAbilityArgs
  ): Promise<SpecialAbility> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SpecialAbility)
  @nestAccessControl.UseRoles({
    resource: "SpecialAbility",
    action: "update",
    possession: "any",
  })
  async updateSpecialAbility(
    @graphql.Args() args: UpdateSpecialAbilityArgs
  ): Promise<SpecialAbility | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SpecialAbility)
  @nestAccessControl.UseRoles({
    resource: "SpecialAbility",
    action: "delete",
    possession: "any",
  })
  async deleteSpecialAbility(
    @graphql.Args() args: DeleteSpecialAbilityArgs
  ): Promise<SpecialAbility | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
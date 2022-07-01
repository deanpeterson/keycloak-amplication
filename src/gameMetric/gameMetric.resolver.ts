import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GameMetricResolverBase } from "./base/gameMetric.resolver.base";
import { GameMetric } from "./base/GameMetric";
import { GameMetricService } from "./gameMetric.service";

@graphql.Resolver(() => GameMetric)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GameMetricResolver extends GameMetricResolverBase {
  constructor(
    protected readonly service: GameMetricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

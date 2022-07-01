import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameMetricService } from "./gameMetric.service";
import { GameMetricControllerBase } from "./base/gameMetric.controller.base";

@swagger.ApiTags("gameMetrics")
@common.Controller("gameMetrics")
export class GameMetricController extends GameMetricControllerBase {
  constructor(
    protected readonly service: GameMetricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

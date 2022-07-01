import { Module } from "@nestjs/common";
import { GameMetricModuleBase } from "./base/gameMetric.module.base";
import { GameMetricService } from "./gameMetric.service";
import { GameMetricController } from "./gameMetric.controller";
import { GameMetricResolver } from "./gameMetric.resolver";

@Module({
  imports: [GameMetricModuleBase],
  controllers: [GameMetricController],
  providers: [GameMetricService, GameMetricResolver],
  exports: [GameMetricService],
})
export class GameMetricModule {}

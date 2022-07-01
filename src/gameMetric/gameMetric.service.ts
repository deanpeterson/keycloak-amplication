import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GameMetricServiceBase } from "./base/gameMetric.service.base";

@Injectable()
export class GameMetricService extends GameMetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

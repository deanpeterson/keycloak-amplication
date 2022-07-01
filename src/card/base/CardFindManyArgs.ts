/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CardWhereInput } from "./CardWhereInput";
import { Type } from "class-transformer";
import { CardOrderByInput } from "./CardOrderByInput";

@ArgsType()
class CardFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CardWhereInput,
  })
  @Field(() => CardWhereInput, { nullable: true })
  @Type(() => CardWhereInput)
  where?: CardWhereInput;

  @ApiProperty({
    required: false,
    type: [CardOrderByInput],
  })
  @Field(() => [CardOrderByInput], { nullable: true })
  @Type(() => CardOrderByInput)
  orderBy?: Array<CardOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CardFindManyArgs };
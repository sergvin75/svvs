import { Resolver } from '@nestjs/graphql'
import { Query } from '@nestjs/graphql'

@Resolver('app')
export class AppResolver {

  @Query('test')
  async getData(){
    return `It is Graphql responce`
  }
}

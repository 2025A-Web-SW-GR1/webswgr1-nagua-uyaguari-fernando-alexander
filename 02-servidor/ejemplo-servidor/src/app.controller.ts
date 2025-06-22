import { Controller, Get, Post, Query, Param, Headers, Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id')
  @HttpCode(200)
  getEjemplo(
    @Param('id') id,
    @Query('mensaje') mensaje,
    @Headers('cabezera') cabezera,
    @Body('cuerpo') cuerpo
  ): string {
    return id + ' ' + mensaje + ' Funcionanado ' + cabezera + ' ' + cuerpo;
  }

}

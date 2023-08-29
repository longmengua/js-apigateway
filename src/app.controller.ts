import { All, Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { manipulateHTML } from './util/dom.operation';
import { env } from './config/config';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/version')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/')
  async test(@Req() req: Request, @Res() res: Response) {
    const url = `${env.RESOURCE_URL}`
    const axiosResponse: AxiosResponse = await axios.get(url);
    const htmlContent: string = manipulateHTML(axiosResponse?.data)
    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
  }
}

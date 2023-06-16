import {
  Controller,
  Get,
  Headers,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard42 } from './auth42.guard';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthFilter42 } from './auth42.filter';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(AuthGuard42)
  async login() {
    //
  }

  @Get('42/callback')
  @UseGuards(AuthGuard42)
  @UseFilters(AuthFilter42)
  async login42(@Req() req: Request, @Res() res: Response) {
    this.authService.login({ req, res });
  }

  // token 기반 -> id 기반
  @Get('logout')
  async logout(@Headers('authtoken') token: string) {
    this.authService.logout(token);
  }
}
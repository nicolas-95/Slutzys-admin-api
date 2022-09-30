import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../services';

@Injectable()
export class LoadUser implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization || request?.query?.authorization || request?.query?.Authorization;
    if (!token || token === 'null') return true;
    const user = request.user || (await this.authService.getSourceFromJWT(token));
    if (!request.user) request.user = user;
    const decodded = this.authService.verifyJWT(token);
    request.authUser = request.authUser || decodded;
    return true;
  }
}

import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { AuthService } from '../auth.service'

@Injectable()
export class RestAuthGuard implements CanActivate {
  constructor(@Inject() private authService: AuthService) {}

  canActivate(
    context: ExecutionContext
  ): Boolean | Promise<boolean> | Observable<boolean> {
    const result = this.authService.validateUser(
      context.switchToHttp().getRequest().body.username,
      context.switchToHttp().getRequest().body.password
    )
    if (result == null) {
      return false
    }

    return true
  }
}

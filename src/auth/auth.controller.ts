import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDTO } from './dtos/credentials.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/signup')
    async signUp(@Body() credentialsDTO: CredentialsDTO) {
        return this.authService.signUp(credentialsDTO)
    }

    @Post('/signin')
    async singIn(@Body() credentialsDTO: CredentialsDTO) : Promise<{accessToken: string}>  {
        return this.authService.signIn(credentialsDTO);
    }

}

import { IsString, MinLength, MaxLength, Matches } from "class-validator";


export class CredentialsDTO {
    @IsString()
    @MinLength (3)
    @MaxLength (25)
    username: string;
    @IsString()
    @MinLength (8)
    @MaxLength (25)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: "Senha Fraca"})
    password: string;
}
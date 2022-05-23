import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.ru', description: 'Email'})
    readonly email: string;
    @ApiProperty({example: 'some password', description: 'Password'})
    readonly password: string;
}

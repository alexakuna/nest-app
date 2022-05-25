import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";

//Swagger API documentation
@ApiTags('Users')

//Route endpoint
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    //Swagger API documentation
    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})

    //API method
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    //Swagger API documentation
    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [User]})

    //API method
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}

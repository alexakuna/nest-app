import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

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

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    //API method
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Assign a Role'})
    @ApiResponse({status: 200})

    @Roles("ADMIN")
    @UseGuards(RolesGuard)

    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({summary: 'Ban a user'})
    @ApiResponse({status: 200})

    @Roles("ADMIN")
    @UseGuards(RolesGuard)

    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.banUser(dto);
    }
}

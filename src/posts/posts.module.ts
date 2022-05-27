import {forwardRef, Module} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Post} from "./posts.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {FilesModule} from "../files/files.module";

@Module({
  imports: [
      FilesModule,
    SequelizeModule.forFeature([User, Post]),
    RolesModule,
    forwardRef(() => AuthModule)
  ],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}

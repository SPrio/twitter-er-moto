import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param() param): string {
    // TODO
    return `details of user = ${param.username}`;
  }

  @Get('/:userId')
  getUserById(@Param() param): string {
    // TODO
    return `details of user id = ${param.userId}`;
  }

  @Post('/')
  createUser(@Param() param): string {
    // TODO
    return 'create user';
  }

  @Patch('/:userId')
  updateUser(@Param() param): string {
    // TODO
    return `update user id = ${param.userId}`;
  }

  @Put('/:userId/follow')
  followUser(@Param() param): string {
    // TODO
    return `you followwed user id = ${param.userId}`;
  }

  @Delete('/:userId/follow')
  unfollowUser(@Param() param): string {
    // TODO
    return `you unfollowed user id = ${param.userId}`;
  }

  @Get('/:userId/followers')
  getFollowers(@Param() params): string {
    // TODO
    return `get followers of user`;
  }

  @Get('/:userId/followers')
  getFollowees(@Param() params): string {
    // TODO
    return `get followees of user`;
  }

}

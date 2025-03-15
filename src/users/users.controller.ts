import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param('username') username: string): string {
    // TODO
    return `details of user = ${username}`;
  }

  @Get('/:userId')
  getUserById(@Param('userId') userId: string): string {
    // TODO
    return `details of user id = ${userId}`;
  }

  @Post('/')
  createUser(): string {
    // TODO
    return 'create user';
  }

  @Patch('/:userId')
  updateUser(@Param('userId') userId: string): string {
    // TODO
    return `details of user id = ${userId} updated`;
  }

  @Put('/:userId/follow')
  followUser(): string {
    // TODO
    return 'you followed user';
  }

  @Delete('/:userId/follow')
  unfollowUser(): string {
    // TODO
    return 'you unfollowed user';
  }

  @Get('/:userId/followers')
  getFollowers(@Param('userId') userId: string): string {
    // TODO
    return 'get followers of user';
  }

  @Get('/:userId/followees')
  getFollowees(@Param('userId') userId: string): string {
    // TODO
    return 'get followees of user';
  }

}

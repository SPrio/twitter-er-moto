import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    // TODO
    return 'get all posts';
  }

  @Get('/:postid')
  getPostDetails(@Param('postid') postid: string): string {
    // TODO
    return `details of postid = ${postid}`;
  }

  @Post('/')
  createNewPost(): string {
    // TODO
    return `new post created`;
  }

  @Delete('/:postid')
  deletePost(@Param('postid') postid: string): string {
    // TODO
    return `delete postID = ${postid}`;
  }

  @Put('/:postid/like')
  likePost(@Param('postid') postid: string): string {
    // TODO
    return `liked post ${postid}`
  }

  @Delete('/:postid/unlike')
  unlikePost(@Param('postid') postid: string): string {
    // TODO
    return `unliked post ${postid}`
  }
}

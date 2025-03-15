import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ length: 50 })
  name: string;
  avatar: string;

  @Column({ length: 240 })
  bio: string;

  @Column({ name: 'follower_count', default: 0 })
  follower_count: number;
  @Column({ name: 'followee_count', default: 0 })
  followee_count: number;

  @Column('boolean', { default: false })
  verified: boolean;
}

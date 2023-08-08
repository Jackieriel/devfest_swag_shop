import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  cart_id: number;

  @ManyToOne(() => User)
  customer: User;
}

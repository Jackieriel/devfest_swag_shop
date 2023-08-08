import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { Cart } from './cart/entities/cart.entity';
import { Order } from './orders/entities/order.entity';
import { Payment } from './payments/entities/payment.entity';
import { CartItem } from './cart_items/entities/cart_item.entity';
import { OrderItem } from './order_items/entities/order_item.entity';
import { User } from './users/entities/user.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@aksu2015',
  database: 'gdg_shop',
  entities: [User, Product, Payment, Order, OrderItem, CartItem, Cart],
  synchronize: true,
};


export class DataSource { }

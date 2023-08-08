import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './data-source'; // Import the databaseConfig
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order_items/order_items.module';
import { PaymentsModule } from './payments/payments.module';
import { CartModule } from './cart/cart.module';
import { CartItemsModule } from './cart_items/cart_items.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule,
    OrdersModule,
    OrderItemsModule,
    PaymentsModule,
    CartModule,
    CartItemsModule,
    UsersModule,
    TypeOrmModule.forRoot(databaseConfig)], // Use the imported databaseConfig
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

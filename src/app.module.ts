import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [DatabaseModule, UsersModule],
})
export class AppModule {}

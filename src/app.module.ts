import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DBConfigService } from './shared/services/db-config.service';
import { EnvConfigService } from './shared/services/env-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DrizzlePGModule.registerAsync({
      useClass: DBConfigService,
    }),
  ],
})
export class AppModule {}

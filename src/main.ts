import {
  HttpStatus,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  type NestExpressApplication,
} from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { EnvConfigService } from './shared/services/env-config.service';
import { SharedModule } from './shared/shared.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      cors: true,
    },
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      dismissDefaultMessages: true,
      exceptionFactory: (errors) => new UnprocessableEntityException(errors),
    }),
  );

  const configService = app.select(SharedModule).get(EnvConfigService);

  const port = configService.appConfig.port;
  await app.listen(port);

  // eslint-disable-next-line no-console
  console.log(`Server is running on: ${await app.getUrl()}`);

  return app;
}

// eslint-disable-next-line unicorn/prefer-top-level-await
void bootstrap();

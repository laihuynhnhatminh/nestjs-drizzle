import { Global, Module, type Provider } from '@nestjs/common';

import { DBConfigService } from './services/db-config.service';
import { EnvConfigService } from './services/env-config.service';

const providers: Provider[] = [EnvConfigService, DBConfigService];

@Global()
@Module({
  providers,
  imports: [],
  exports: [...providers],
})
export class SharedModule {}

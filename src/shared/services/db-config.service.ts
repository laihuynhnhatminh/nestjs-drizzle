import { Injectable } from '@nestjs/common';

import { authors } from '../../modules/books/schemas/authors.schema';
import { books } from '../../modules/books/schemas/books.schema';
import { EnvConfigService } from './env-config.service';

@Injectable()
export class DBConfigService {
  constructor(private configService: EnvConfigService) {}

  public create = () => {
    const dbConfig = this.configService.databaseConfig;

    return {
      tag: dbConfig.tag,
      pg: {
        connection: 'client',
        config: {
          connectionString: `postgresql://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`,
        },
      },
      config: { schema: books, authors },
    };
  };
}

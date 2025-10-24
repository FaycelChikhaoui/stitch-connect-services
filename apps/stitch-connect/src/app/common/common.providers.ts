import { Provider, Scope } from '@nestjs/common';
import { DbClient, DataReader } from '@stitch-connect-datasource';
import { environment } from '../../environments/environment';

const DbClientProvider: Provider<DbClient> = {
  provide: DbClient,
  useFactory: () => {
    if (!environment.stitchConnectDB) {
      throw new Error('Database connection string is not defined');
    }
    const client = new DbClient(environment.stitchConnectDB);
    client.$connect();
    console.log('new DbClient created !');
    return client;
  },
  scope: Scope.DEFAULT,
};

const DataReaderProvider: Provider<DataReader> = {
  provide: 'DataReader',
  useFactory: (dbClient: DbClient) => {
    return new DataReader(dbClient);
  },
  inject: [DbClient],
  scope: Scope.REQUEST,
};

export { DbClientProvider, DataReaderProvider };

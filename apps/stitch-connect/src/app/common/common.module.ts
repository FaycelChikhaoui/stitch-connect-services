import { Module } from '@nestjs/common';

import { DataReaderProvider, DbClientProvider } from './common.providers';

@Module({
  imports: [],
  providers: [DataReaderProvider, DbClientProvider],
  exports: [DataReaderProvider, DbClientProvider],
})
export class CommonModule {}

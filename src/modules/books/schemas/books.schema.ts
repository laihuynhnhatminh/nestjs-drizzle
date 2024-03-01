import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const books = pgTable('Books', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }),
});

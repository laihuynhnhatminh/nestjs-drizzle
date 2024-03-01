import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const authors = pgTable('Authors', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});

import { scores } from '@domain/student';
import { relations } from 'drizzle-orm';
import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const subjects = pgTable('subjects', {
  id: varchar('id', { length: 25 }).primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  numberOfCredits: integer('numberOfCredits').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt'),
});

export const subjectsRelations = relations(subjects, ({ many }) => ({
  scores: many(scores),
}));

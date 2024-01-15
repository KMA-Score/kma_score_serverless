import { relations } from 'drizzle-orm';
import { scores } from './score.model';
import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const students = pgTable('students', {
  id: varchar('id', { length: 25 }).primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  class: varchar('class', { length: 10 }).notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt'),
});

export const studentsRelations = relations(students, ({ many }) => ({
  scores: many(scores),
}));

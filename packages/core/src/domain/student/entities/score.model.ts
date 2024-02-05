import { students } from './student.model';
import { subjects } from '@domain/subject';
import { InferSelectModel, relations } from 'drizzle-orm';
import {
  pgTable,
  primaryKey,
  real,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const scores = pgTable(
  'scores',
  {
    studentId: varchar('studentId', { length: 25 }).notNull(),
    subjectId: varchar('subjectId', { length: 25 }).notNull(),
    firstComponentScore: real('firstComponentScore'),
    secondComponentScore: real('secondComponentScore'),
    examScore: real('examScore'),
    averageScore: real('averageScore'),
    alphabetScore: varchar('alphabetScore', { length: 2 }),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt'),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.studentId, table.subjectId] }),
  }),
);

export const scoresRelations = relations(scores, ({ one }) => ({
  student: one(students, {
    fields: [scores.studentId],
    references: [students.id],
  }),
  subject: one(subjects, {
    fields: [scores.subjectId],
    references: [subjects.id],
  }),
}));

export enum AlphabetToTetraScore {
  'A+' = 4.0,
  'A' = 3.8,
  'B+' = 3.5,
  'B' = 3.0,
  'C+' = 2.5,
  'C' = 2.0,
  'D+' = 1.5,
  'D' = 1.0,
  'F' = 0.0,
}

export type ScoreSelectType = InferSelectModel<typeof scores>;

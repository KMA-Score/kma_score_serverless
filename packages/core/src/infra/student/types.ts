import { Loaded } from '@mikro-orm/core';
import { StudentsEntity } from '@entities/students.entity';

export type StudentQueryResult = Loaded<StudentsEntity, 'scores', '*', never>;

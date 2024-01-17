import { Student } from '@domain/index';
import { Loaded } from '@mikro-orm/core';

export type StudentQueryResult = Loaded<Student, 'scores', '*', never>;

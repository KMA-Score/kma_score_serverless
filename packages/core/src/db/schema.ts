import * as students from '@domain/student/entities/student.model';
import * as scores from '@domain/student/entities/score.model';
import * as subjects from '@domain/subject/entities/subject.model';

export const schema = {
  ...students,
  ...subjects,
  ...scores,
};

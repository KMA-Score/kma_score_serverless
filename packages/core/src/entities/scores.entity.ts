import {
  Entity,
  ManyToOne,
  OptionalProps,
  PrimaryKeyProp,
  Property,
  Ref,
} from '@mikro-orm/core';
import { StudentsEntity } from './students.entity.js';
import { SubjectsEntity } from './subjects.entity.js';

@Entity({
  tableName: 'scores',
})
export class ScoresEntity {
  [PrimaryKeyProp]?: ['studentId', 'subjectId'];

  [OptionalProps]?: 'createdAt';

  @ManyToOne({
    entity: () => StudentsEntity,
    ref: true,
    fieldName: 'studentId',
    updateRule: 'cascade',
    primary: true,
  })
  studentId!: Ref<StudentsEntity>;

  @ManyToOne({
    entity: () => SubjectsEntity,
    ref: true,
    fieldName: 'subjectId',
    updateRule: 'cascade',
    primary: true,
  })
  subjectId!: Ref<SubjectsEntity>;

  @Property({
    fieldName: 'firstComponentScore',
    columnType: 'real',
    type: 'number',
    nullable: true,
  })
  firstComponentScore?: number;

  @Property({
    fieldName: 'secondComponentScore',
    columnType: 'real',
    type: 'number',
    nullable: true,
  })
  secondComponentScore?: number;

  @Property({
    fieldName: 'examScore',
    columnType: 'real',
    type: 'number',
    nullable: true,
  })
  examScore?: number;

  @Property({
    fieldName: 'averageScore',
    columnType: 'real',
    type: 'number',
    nullable: true,
  })
  averageScore?: number;

  @Property({
    fieldName: 'alphabetScore',
    length: 2,
    type: 'string',
    nullable: true,
  })
  alphabetScore?: string;

  @Property({
    fieldName: 'createdAt',
    length: 6,
    type: 'Date',
    defaultRaw: `now()`,
  })
  createdAt!: Date;

  @Property({ fieldName: 'updatedAt', length: 6, type: 'Date', nullable: true })
  updatedAt?: Date;
}

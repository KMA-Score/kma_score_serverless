import { Score } from '../../student/entities/scores.entity.js';
import {
  Collection,
  Entity,
  OneToMany,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity({
  tableName: 'subjects',
})
export class Subject {
  [OptionalProps]?: 'createdAt';

  @PrimaryKey({ length: 25, type: 'string' })
  id!: string;

  @Property({ length: 256, type: 'string' })
  name!: string;

  @Property({ fieldName: 'numberOfCredits', type: 'number' })
  numberOfCredits!: number;

  @Property({
    fieldName: 'createdAt',
    length: 6,
    type: 'Date',
    defaultRaw: `now()`,
  })
  createdAt!: Date;

  @Property({ fieldName: 'updatedAt', length: 6, type: 'Date', nullable: true })
  updatedAt?: Date;

  @OneToMany({ entity: () => Score, mappedBy: 'subjectId' })
  subjectIdInverse = new Collection<Score>(this);
}

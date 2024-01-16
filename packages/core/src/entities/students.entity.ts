import {
  Collection,
  Entity,
  OneToMany,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { ScoresEntity } from './scores.entity.js';

@Entity({
  tableName: 'students',
})
export class StudentsEntity {
  [OptionalProps]?: 'createdAt';

  @PrimaryKey({ length: 25, type: 'string' })
  id!: string;

  @Property({ length: 256, type: 'string' })
  name!: string;

  @Property({ length: 10, type: 'string' })
  class!: string;

  @Property({
    fieldName: 'createdAt',
    length: 6,
    defaultRaw: `now()`,
    type: Date,
  })
  createdAt!: Date;

  @Property({ fieldName: 'updatedAt', length: 6, nullable: true, type: Date })
  updatedAt?: Date;

  @OneToMany({
    entity: () => ScoresEntity,
    mappedBy: 'studentId',
  })
  scores = new Collection<ScoresEntity>(this);
}

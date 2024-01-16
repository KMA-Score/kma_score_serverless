import {
  Collection,
  Entity,
  OneToMany,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { ScoresEntity } from './scores.entity';

@Entity({
  tableName: 'subjects',
})
export class SubjectsEntity {
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

  @OneToMany({ entity: () => ScoresEntity, mappedBy: 'subjectId' })
  subjectIdInverse = new Collection<ScoresEntity>(this);
}

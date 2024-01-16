import { Migration } from '@mikro-orm/migrations';

export class Migration20240116194545 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "students" ("id" varchar(25) not null, "name" varchar(256) not null, "class" varchar(10) not null, "createdAt" timestamptz(6) not null default now(), "updatedAt" timestamptz(6) null, constraint "students_pkey" primary key ("id"));',
    );

    this.addSql(
      'create table "subjects" ("id" varchar(25) not null, "name" varchar(256) not null, "numberOfCredits" int not null, "createdAt" timestamptz(6) not null default now(), "updatedAt" timestamptz(6) null, constraint "subjects_pkey" primary key ("id"));',
    );

    this.addSql(
      'create table "scores" ("studentId" varchar(25) not null, "subjectId" varchar(25) not null, "firstComponentScore" real null, "secondComponentScore" real null, "examScore" real null, "averageScore" real null, "alphabetScore" varchar(2) null, "createdAt" timestamptz(6) not null default now(), "updatedAt" timestamptz(6) null, constraint "scores_pkey" primary key ("studentId", "subjectId"));',
    );

    this.addSql(
      'alter table "scores" add constraint "scores_studentId_foreign" foreign key ("studentId") references "students" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "scores" add constraint "scores_subjectId_foreign" foreign key ("subjectId") references "subjects" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "scores" drop constraint "scores_studentId_foreign";',
    );

    this.addSql(
      'alter table "scores" drop constraint "scores_subjectId_foreign";',
    );

    this.addSql('drop table if exists "students" cascade;');

    this.addSql('drop table if exists "subjects" cascade;');

    this.addSql('drop table if exists "scores" cascade;');
  }
}

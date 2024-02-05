import { IStudentRepository } from '@application/ports';
import { db } from '@db/index';

export class StudentRepository implements IStudentRepository {
  async getById(id: string) {
    const student = await db.query.students.findFirst({
      where: (student, { eq }) => eq(student.id, id),
      with: {
        // TODO: This need to be dynamic, but drizzle dynamic with have problem with nested with: https://github.com/drizzle-team/drizzle-orm/issues/824
        scores: {
          with: {
            subject: true,
          },
        },
      },
    });

    return student;
  }
}

import { container } from '@container/index';

export type StudentQueryResult = Awaited<
  ReturnType<typeof container.cradle.studentRepository.getById>
>;

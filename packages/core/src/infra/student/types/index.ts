import { container } from 'container';

export type StudentQueryResult = Awaited<
  ReturnType<typeof container.studentRepository.getById>
>;

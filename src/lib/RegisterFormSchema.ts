import { z } from 'zod';

export const userRoles = ['관리자', '일반 사용자'] as const;

export type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;

export const registerFormSchema = z.object({
  email: z
    .string()
    .nonempty('이메일을 입력해주세요.')
    .email('이메일 형식(ex. hello@sparta-devcamp.com)으로 입력해주세요.')
    .transform((value) => value.toLowerCase()),
  username: z
    .string()
    .min(2, {
      message: '2글자 이상 입력해주세요.',
    })
    .nonempty('이름을 입력해주세요.'),
  phone: z
    .string()
    .min(2, {
      message: '11자리(ex. 01012345678) 형식으로 입력해주세요.',
    })
    .nonempty('번호를 입력해주세요.'),
  role: z.string(),
  // password: z
  //   .string()
  //   .nonempty('비밀번호를 입력해주세요.')
  //   .regex(
  //     /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
  //     '영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요.'
  //   ),
  // passwordCheck: z.string().nonempty('비밀번호를 다시 입력해주세요.'),
});
// .refine((data) => data.password === data.passwordCheck, {
//   path: ['passwordCheck'],
//   message: '비밀번호가 일치하지 않습니다.',
// });

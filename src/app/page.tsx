'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  RegisterFormSchemaType,
  registerFormSchema,
  userRoles,
} from '@/lib/RegisterFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Home() {
  const [step, setStep] = useState<number>(0);

  const form = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      username: '',
      phone: '',
      role: '',
      password: '',
      passwordCheck: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterFormSchemaType> = (data) => {
    console.log(data);
  };

  // const onSubmit = (data: z.infer<typeof registerFormSchema>) => {
  //   console.log(data);
  //   console.log('zzzz');
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>환영합니다! 🐶</p>
    </main>
  );
}

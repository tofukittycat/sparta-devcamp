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

export default function registerForm() {
  return (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>이름</FormLabel>
          <FormControl>
            <Input placeholder="홍길동" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

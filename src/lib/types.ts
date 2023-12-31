export interface Cateogry {
    name: string;
    logo: string;
    color: string;
}


import { z } from 'zod';
import { User as FirebaseUser } from "firebase/auth";


export const LoginFormUserSchema = z
  .object({
    email: z.string().min(1, "Email is required").email({ message: "Invalid email format" }),

  })


export type LoginFormUserType = z.infer<typeof LoginFormUserSchema>;


interface MyUser {
  email : string ;
  name : string  | null;
  uid: string ;
  profile : string  | null;
  role : 'admin' | 'user';
  
  



}

export interface Food {
  id : string ;
  title: string;
  price: number;
  isFavourite: boolean;
  url: string;
  description:string;
  
}
export type User = FirebaseUser & MyUser;
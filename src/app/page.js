'use client';
import { login } from "@/lib/api";
import { guardarToken } from "@/lib/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Login from "@/components/Login";

export default function Home() {


  return <Login/>
}

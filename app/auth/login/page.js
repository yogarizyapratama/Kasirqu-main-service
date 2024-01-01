"use client";

import { appConfig } from "@/config";
import { log } from "@/utils/log";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import cashierImage from "../../../public/images/cashier.png";
import { postData } from "@/utils/api-service";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [login, setLogin] = useState();

  const onSubmit = async (data) => {
    try {
      const loginDetail = await postData("auth/login", {}, data);
      setLogin(loginDetail);
    } catch (error) {
      log(error);
    }

    // router.push("/dashboard");
  };

  return (
    <div className='flex min-h-screen items-center flex-col justify-center px-6 py-12 lg:px-8 bg-slate-900 text-white'>
      <div className='flex flex-row justify-evenly w-full items-center'>
        <div>
          <div className='align-middle'>
            <h2 className='text-blue-500 text-2xl font-bold'>
              {appConfig.appName},{" "}
              <span className='text-white text-sm font-normal'>
                bisnis apapun kasirnya pakai kasirqu
              </span>
            </h2>
            <h2 className='text-blue-500 text-2xl font-bold'>
              Modern,{" "}
              <span className='text-white text-sm font-normal'>
                tampilannya modern dengan fitur-fitur canggih
              </span>
            </h2>
            <h2 className='text-blue-500 text-2xl font-bold'>
              Praktis,{" "}
              <span className='text-white text-sm font-normal'>
                gak perlu lagi deh ribet ngelola keuangan
              </span>
            </h2>
            <h2 className='text-blue-500 text-2xl font-bold'>
              Murah,{" "}
              <span className='text-white text-sm font-normal'>
                yang jelas pasti murah dan berkualitas
              </span>
            </h2>
          </div>
          <Image src={cashierImage} />
        </div>
        <div className='bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 w-fit py-10 px-20'>
          <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-blue-500'>
            {appConfig.appName}
          </h2>
          <h2 className='text-center text-sm font-medium leading-9 tracking-tight text-blue-500'>
            {appConfig.description}
          </h2>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h2 className='text-center text-xl font-bold leading-9 tracking-tight'>
              Masuk menggunakan akun kamu
            </h2>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  className='block text-sm font-medium leading-6'
                  for='email'
                >
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    {...register("email")}
                    type='email'
                    autoComplete='email'
                    required
                    className='block bg-transparent w-full rounded-md border-0 p-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    className='block text-sm font-medium leading-6'
                    for='password'
                  >
                    Password
                  </label>
                  <div className='text-sm'>
                    <Link
                      href='/auth/forgot-password'
                      className='font-semibold text-blue-500 hover:text-indigo-500'
                    >
                      Lupa Password ?
                    </Link>
                  </div>
                </div>
                <div className='mt-2'>
                  <input
                    id='password'
                    {...register("password")}
                    type='password'
                    autoComplete='current-password'
                    required
                    className='block bg-transparent w-full rounded-md border-0 p-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none'
                  />
                </div>
              </div>
              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Masuk
                </button>
              </div>
            </form>

            <p className='mt-10 text-center text-sm text-gray-300'>
              Belum menjadi member ?
              <Link
                href='/auth/register'
                className='font-semibold leading-6 text-blue-500 hover:text-indigo-500'
              >
                {" "}
                daftar sekarang!!!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

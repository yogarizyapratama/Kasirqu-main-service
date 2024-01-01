"use client";

import { appConfig } from "@/config";
import { log } from "@/utils/log";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    log(data);
    router.push("/dashboard");
  };

  return (
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
      <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600 hover:text-indigo-500'>
        {appConfig.appName}
      </h2>
      <span className='text-center text-sm font-medium leading-9 tracking-tight text-indigo-400 hover:text-indigo-500'>
        {appConfig.description}
      </span>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Masuk menggunakan akun kamu
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className='block text-sm font-medium leading-6 text-gray-900'>
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                {...register("email")}
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                Password
              </label>
              <div className='text-sm'>
                <Link
                  href='/auth/forgot-password'
                  className='font-semibold text-indigo-600 hover:text-indigo-500'
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
                className='block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <label
            for='countries'
            class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Select an option
          </label>
          <select
            id='countries'
            class=''
          >
            <option selected>Choose a country</option>
            <option value='US'>United States</option>
            <option value='CA'>Canada</option>
            <option value='FR'>France</option>
            <option value='DE'>Germany</option>
          </select>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Masuk
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-500'>
          Belum menjadi member ?
          <Link
            href='/auth/register'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            daftar sekarang!!!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

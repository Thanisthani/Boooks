import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';

const LoginForm = () => {

  const router = useRouter();
  const [errMsg, setErrMsg] = useState(null);

    const formik = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        onSubmit: (values) => {
          handleSubmit(values);
        },
        validationSchema: yup.object({
          email: yup
            .string()
            .email('Must be a valid email')
            .required('Email is required'),
          password: yup.string().trim().min(8, "Must be 8 characters or more").required('Password is required'),
        }),
    });
    
// post data to db
  
  const handleSubmit = async (values: any) => {

    axios.post('http://localhost:8000/auth/login', values)
      .then((response: any) => {
        console.log(response.data.user);
        if (response.data.user) {
          router.push('/home');
        }
        else {
          setErrMsg(response.data.message);
          console.log(response.data.message);
       }
      });
  }
    
    return ( 
        <div className='pt-10'>
            <form className="w-50" onSubmit={formik.handleSubmit}>
          {errMsg && (<div className="text-red-700 bg-red-100 w-[350px] text-center font-semibold py-1">{ errMsg}</div>)}
        <div className="mb-3 flex flex-col">
          <label htmlFor="email" className="text-lg text-[#50555c] font-semibold pb-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-[350px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none  focus:ring-[#d29bdb] focus:border-[#d29bdb] focus:ring-2 hover:border-[#d29bdb]"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && (
            <div className="text-red-700">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3 flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold text-[#50555c] pb-3">
            Password
          </label>
          <input
            type="text"
            name="password"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none  focus:ring-[#d29bdb] focus:border-[#d29bdb] focus:ring-2 hover:border-[#d29bdb]"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
                    />
                    
                    {/*   */}
          {formik.errors.password && (
            <div className="text-red-700">{formik.errors.password}</div>
          )}
        </div>
   

        <button type="submit" className="bg-[#592E64] w-full text-white py-2 mt-8 rounded-md text-lg font-semibold hover:bg-[#c37acf]">
         Login
        </button>
      </form>
        </div>
     );
}
 
export default LoginForm;
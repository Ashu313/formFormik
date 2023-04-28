import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {MenuItem} from '@mui/material';
import { useState } from 'react';
import { Form, useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
const initialValues={
  name:"",
  email:"",
  password:"",
  cnfpassword:"",
  gender:"",
  address:"",
  class:"",
  RollNo:"",
  Address:"",
};
const validationSchema= Yup.object({
name: Yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Required'),
Address: Yup.string()
  .max(200, 'Must be 200 characters or less')
  .required('Required'),
  RollNo: Yup.string()
  .max(20, 'must be a number')
  .required('Required'),
   class: Yup.string()
  .max(20, 'Must be 10 characters or less')
  .required('Required'), 
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  )
  .required('Password is required'),
  cnfpassword: Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  ).oneOf([Yup.ref("password")], "Passwords do not match").required('cnf password is required'),

email: Yup.string().email('Invalid email address').required('Required'),
gender: Yup.string().required('gender is required'),
});

const  onSubmit = async (values, { resetForm }) => {
  // Simulating an async request with setTimeout
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  }, 3000);
};
function App() {
 
  const [submitting, setSubmitting] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
   onSubmit
  });

  return (
     <>
       <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px',
        margin: 'auto',
        padding: '24px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
    
      <TextField
        required
        id="email"
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      
      <TextField
        required
        id="password"
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      
       <TextField
        required
        id="password"
        name="cnfpassword"
        type="password"
        label="confirmPassword"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cnfpassword}
        error={formik.touched.cnfpassword && Boolean(formik.errors.cnfpassword)}
        helperText={formik.touched.cnfpassword && formik.errors.cnfpassword}
      />
      
       <TextField
        id="gender"
        name="gender"
        select
        label="Gender"
       
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.gender}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
      
       
       
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </TextField>
     
     
      <TextField
        required
        id="class"
        name="class"
        label="class"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.class}
        error={formik.touched.class && Boolean(formik.errors.class)}
        helperText={formik.touched.class && formik.errors.class}
      />
      
      <TextField
        required
        id="RollNo"
        name="RollNo"
        label="RollNo"
        type="number"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.RollNo}
        error={formik.touched.RollNo && Boolean(formik.errors.RollNo)}
        helperText={formik.touched.RollNo && formik.errors.RollNo}
      />
  
      <TextField
        required
        id="Address"
        name="Address"
        label="Address"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Address}
        error={formik.touched.Address && Boolean(formik.errors.Address)}
        helperText={formik.touched.Address && formik.errors.Address}
      />
       
       <Button
        type="submit"
        variant="contained"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </Button>
      <Button variant="contained" color="primary" type="reset"  onClick={formik.handleSubmit} >
      reset
      </Button>
     

      </Box>
      
      
    

     </>
  );
}
export default App;
/*import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  class: yup.string().required('Class is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const initialValues = {
  name: '',
  class: '',
  password: '',
  confirmPassword: '',
};

const App = () => {
  const [submitting, setSubmitting] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setSubmitting(true);
      console.log(values);
      alert("submitted");
      setSubmitting(false);
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px',
        margin: 'auto',
        padding: '24px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id="class"
        name="class"
        label="Class"
        variant="outlined"
        value={formik.values.class}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.class && Boolean(formik.errors.class)}
        helperText={formik.touched.class && formik.errors.class}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        variant="outlined"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      />
      <Button
        type="submit"
        variant="contained"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </Button>
    </Box>
  );
};

export default App;*/

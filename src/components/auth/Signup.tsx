import { Form, useNavigation, useActionData } from "react-router-dom";
import "./signup.css";

export default function SignupForm() {
  const navigation = useNavigation();
  const error = useActionData() as string;
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="form-group">
      <h2>Signup Form</h2>

      <Form method="post">
        <div className="input-group">
          <input name="firstName" required />
          <label>First Name</label>
        </div>

        <div className="input-group">
          <input name="lastName" required />
          <label>Last Name</label>
        </div>

        <div className="input-group">
          <input name="username" required />
          <label>Username</label>
        </div>

        <div className="input-group">
          <input type="email" name="email" required />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>

        <button disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Signup"}
        </button>
      </Form>

      {error && <p>{error}</p>}
    </div>
  );
}














// import React, { useState } from 'react';
// import './signup.css'
// import { Form, redirect } from 'react-router-dom';
// export default function SignupForm() {


//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   // const navigate = useNavigate()

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');
//     const fd = new FormData(e.currentTarget)
//     const formData = Object.fromEntries(fd.entries())

//     try {
//       const res = await fetch('https://dummyjson.com/users/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (res.status === 422 || res.status === 401) return res;

//       if (!res.ok) throw new Error('Signup failed');

//       const data = await res.json();
//       console.log(data);

//       setMessage(`User ${data.username} created successfully! 🎉`);
//       localStorage.setItem("token", 'dummy-token-' + data.id);
//       return redirect('/login')
//     } catch (err:any) {
//       setMessage(err.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='form-group' >
//       <h2>Signup Form</h2>
//      <Form onSubmit={handleSubmit}>
//   <div className="input-group">
//     <input
//       type="text"
//       name="firstName"
//       required
//     />
//     <label>First Name</label>
//   </div>

//   <div className="input-group">
//     <input
//       type="text"
//       name="lastName"
//       required
//     />
//     <label>Last Name</label>
//   </div>

//   <div className="input-group">
//     <input
//       type="text"
//       name="username"
//       required
//     />
//     <label>Username</label>
//   </div>

//   <div className="input-group">
//     <input
//       type="email"
//       name="email"
//       required
//     />
//     <label>Email</label>
//   </div>

//   <div className="input-group">
//     <input
//       type="password"
//       name="password"
//       required
//     />
//     <label>Password</label>
//   </div>

//   <button type="submit" disabled={loading}>
//     {loading ? 'Signing up...' : 'Signup'}
//   </button>
// </Form>

// {message && <p>{message}</p>}
//       {message && <p style={{ marginTop: 15 }}>{message}</p>}
//     </div>
//   );
// }




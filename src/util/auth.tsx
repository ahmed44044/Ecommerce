import { redirect } from "react-router-dom";

export function tokenLoader() {
  return localStorage.getItem("token");
}

export function requireAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    throw redirect("/signup");
  }
  return null;
}




export async function loginAction({ request }: {request:Request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const token = localStorage.getItem('token')
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  });

  const result = await res.json();
  
  
   if(token && result){
        
    return redirect('/')
    }else{
    localStorage.setItem("token", 'dummy-token-');
       return redirect('/')

    }
}


export async function signupAction({ request }: {request:Request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const res = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Signup failed");
  }

  const result = await res.json();

  // dummy token
  localStorage.setItem("token", "dummy-token-" + result.id);

  return redirect("/"); 
}

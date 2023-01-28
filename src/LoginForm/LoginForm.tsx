import React, {ChangeEvent, FormEvent, useState} from "react";

type FormData = {
  email: string,
  password: string
}

const LoginForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({email: "", password: ""});
  const [message, setMessage] = useState("");


  const setData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const submitForm = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: formData.email, password: formData.password})
    };

    fetch("http://localhost:5000/login-request", requestOptions).then(res => {
      res.json().then((data) => {
        setMessage(data.message);
      })
    })
  }

  return <div>
    <form onSubmit={submitForm}>
      <input name={"email"} type={"email"} placeholder={"Email"} onChange={setData}/>
      <input name={"password"} type={"password"} placeholder={"Password"} onChange={setData}/>
      <button type={"submit"}>Submit</button>
    </form>

    {!!message && <div>{message}</div>}
  </div>;
}

export default LoginForm;

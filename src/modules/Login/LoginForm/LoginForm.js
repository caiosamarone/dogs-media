import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import useForm from '../../../utils/hooks/useForm';
import { DOGS_LOGIN } from '../../../utils/routes/routes';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch(DOGS_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => console.log(json));
    }
  };

  return (
    <section>
      Login form
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          label="Usuário"
          {...username}
          // value={username}
          // onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          {...password}
          // value={password}
          // onChange={({ target }) => setPassword(target.value)}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastrar</Link>
    </section>
  );
};

export default LoginForm;

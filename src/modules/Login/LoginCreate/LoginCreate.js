import React from 'react';
import { USER_POST } from '../../../api/api';
import Button from '../../../components/Button/Button';
import Error from '../../../components/Error/Error';
import Input from '../../../components/Input/Input';
import { UserContext } from '../../../utils/context/UserContext';
import useFetch from '../../../utils/hooks/useFetch';
import useForm from '../../../utils/hooks/useForm';
import styles from './LoginCreate.module.css';

const LoginCreate = () => {
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  const username = useForm();
  const email = useForm('email');
  // const password = useForm('password');
  const password = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    });
    const { response } = await request(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;

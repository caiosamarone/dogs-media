import React from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Error from '../../../components/Error/Error';
import useFetch from '../../../utils/hooks/useFetch';
import useForm from '../../../utils/hooks/useForm';
import { PASSWORD_RESET } from '../../../api/api';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setKey(login);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        password: password.value,
        login,
        key,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        navigate('/conta');
      }
    }
  };

  return (
    <div>
      <h1 className="title">Resetar a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        <Error error={error} />
      </form>
    </div>
  );
};

export default LoginPasswordReset;

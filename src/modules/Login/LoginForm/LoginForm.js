import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Error from '../../../components/Error/Error';
import Input from '../../../components/Input/Input';
import { UserContext } from '../../../utils/context/UserContext';
import useForm from '../../../utils/hooks/useForm';
import styles from './LoginForm.module.css';
import stylesBtn from '../../../components/Button/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" name="username" label="Usuário" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        <Button disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>
        <Error error={error} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastrar
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;

import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import useForm from '../../../utils/hooks/useForm';
import useFetch from '../../../utils/hooks/useFetch';
import { PHOTO_POST } from '../../../api/api';
import Error from '../../../components/Error/Error';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = useForm();
  const { data, error, loading, request } = useFetch();
  const peso = useForm('number');
  const idade = useForm('number');
  const navigate = useNavigate();

  const [img, setImg] = React.useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  React.useEffect(() => {
    if (data) {
      navigate('/conta');
    }
  }, [data, navigate]);

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <input
          label="Nome"
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImgChange}
        />
        <Button disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</Button>
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;

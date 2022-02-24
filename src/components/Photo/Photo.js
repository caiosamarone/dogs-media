import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api/api';
import useFetch from '../../utils/hooks/useFetch';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import PhotoContent from '../PhotoContent/PhotoContent';
import styles from './Photo.module.css';

const Photo = () => {
  const { id } = useParams();
  const { request, data, loading, error } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};

export default Photo;

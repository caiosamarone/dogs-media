import React from 'react';
import { GET_STATS } from '../../../api/api';
import useFetch from '../../../utils/hooks/useFetch';
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error';
import Head from '../../../components/Head/Head';
import UserStatsGraphs from '../UserStatsGraphs/UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const { url, options } = GET_STATS();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas"></Head>
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;

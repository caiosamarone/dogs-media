import React from 'react';
import styles from './UserStatsGraphs.module.css';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [totalAccess, setTotalAccess] = React.useState(0);

  React.useEffect(() => {
    const totalAcessos = data.map((x) => Number(x.acessos));
    const somaTotal = totalAcessos.reduce((prev, cur) => prev + cur);
    setTotalAccess(somaTotal);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total}`}>
        <p>Acessos: {totalAccess}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs;

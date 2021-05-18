import {useParams, useHistory} from 'react-router-dom';
import {useEffect} from 'react';

const Goat = () => {
  const params = useParams();
  console.log(params);

  const history = useHistory();
  console.log(history);

  useEffect(() => {
    setTimeout(() => {
      history.push('/about');
    }, 3000);
  }, [history]);

  const buttonClick = () => {
    // window.location = 'http://www.google.com';
    // history.push('/about');
    history.go(-1);
  };

  // useEffect(() => {
  //   axios.get(`/api/goats/${params.goatId}`)
  //     .then()
  // }, [params.goatId])

  return (
    <div>
      <h2>Goat #{params.goatId}</h2>
      <button onClick={buttonClick}>Go to the about page</button>
    </div>
  );
};

export default Goat;

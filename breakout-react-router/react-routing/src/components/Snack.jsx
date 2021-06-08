import { useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';

const Snack = () => {
  const params = useParams();
  // console.log(params);

  const history = useHistory();
  console.log(history);

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 5000);
  }, []);

  // const [snack, setSnack] = useState({});
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(`/api/snacks/${params.snackId}`)
  //     .then(res => {
  //       setLoading(false);
  //       setSnack(res.data);
  //     })
  // }, [params.snackId]);

  // window.location = 'http://localhost:3000'

  return (
    <div>
      {/* { loading && <Spinner /> }
      { edit && <Form /> }
      { !edit && <Show /> } */}
      <h2>An individual snack</h2>
      <h3>{params.snackId}</h3>
    </div>
  );
};

export default Snack;

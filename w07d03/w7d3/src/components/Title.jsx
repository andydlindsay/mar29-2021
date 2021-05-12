import {useState, useEffect} from 'react';
import axios from 'axios';

const Title = (props) => {
  console.log(props);

  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (counter >= 10) {
      console.log('updating the document title');
      document.title = `you have clicked ${counter} times`;
      // alert('give me your credit card number');
    }
  }, [counter, searchTerm]);

  useEffect(() => {
    console.log('setting up interval');
    const interval = setInterval(() => {
      console.log('interval has fired!', counter);
    }, 3000);

    // clearInterval(interval);

    const cleanup = () => {
      console.log('cleaning up after ourselves');
      clearInterval(interval);
    };

    return cleanup;
  }, [counter]);

  useEffect(() => {
    const url = 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';
    console.log('fetching the recipes');
    
    axios.get(url)
      .then(res => {
        console.log('retrieved the recipe data');
        // setRecipes([...recipes, ...res.data]);
        // setRecipes(prevRecipes => [...prevRecipes, ...res.data]);
        setRecipes(res.data);
      });
  }, []);

  // useEffect(() => {
  //   setCounter(counter + 1);
  // }, [counter]);

  return (
    <div>
      <h2>Title Component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <div>
        <h2>Search term: {searchTerm}</h2>
        <input 
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </div>

      <div>
        { recipes.map((recipe) => {
          return <p key={recipe.id}>{recipe.title}</p>
        }) }
      </div>
    </div>
  );
};

export default Title;

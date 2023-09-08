import './App.css';
import Card from './components/Card';
function App() {
  // create some dummy data which the name is Post
  const Posts = {
    title: 'React Blog Task in A2sv',
    author: 'Abenezer',
    date: 'September 8, 2023',
    summary: 'This is a sample React blog post summary in A2sv Tasks Who which I did.',
  }
  // let;s return the card by using Posts to pass for each componets
  return (
    <div className="App">
      <Card 
          title={Posts.title}
          author={Posts.author}
          date={Posts.date}
          summary={Posts.summary}
      />
       
    </div>
  );
}

export default App;

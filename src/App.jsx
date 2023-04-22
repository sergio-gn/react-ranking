import './App.css'
import VoteCard from './simpleCard'
import CardList from './MultiCard'
function App() {
  return (
    <div className="App">
      <div className="card">
        <VoteCard initialUpvotes={0} initialDownvotes={0} />
        <CardList/>
      </div>
    </div>
  )
}

export default App

import './App.css'
import useCatImage from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main className="container">
      <h1>App de gatitos </h1>
      <button onClick={refreshFact}>Get a new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`A image generate with the firs three words from "${fact}"`}
        />
      )}
    </main>
  )
}

export default App

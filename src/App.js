import './App.css';
import Card from './components/Card';

let data = [
  {
    nft: "https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg",
    title: "Carlos' NFT",
    description: "Worth millions",
    price: "0.134 ETH",
    creator: "Carlos Diaz"
  }
]
function App() {
  return (
    <div className="App">
      {data.map((nft)=> {
        return <Card />
      })}
    </div>
  );
}

export default App;

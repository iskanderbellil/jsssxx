import logo from './logo.svg';
import './App.css';
import myimage from "./startapus.jpg"

function App() {
  return (
    <div className="App">
     
     <div style={{border:'solid 1 black',maxWidth:'100vw'}}>

     <h1 class="title red">FuTure</h1>



<img src={myimage} alt='startup-desktop' width={400} height={300} />



<img src="/startuptunisie.jpg" width={400} height={300}/>

</div>

<video width={600} height={600} controls>

<source src="myvid.mp4" type="video/mp4" />

</video>

    </div>
  );
}
export default App;
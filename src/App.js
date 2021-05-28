import {Data, MyImage, ActionAlert} from './profile/Profile';

function App() {
  const myStyle = {color:'#d4ffe6', fontSize: 15, fontWeight: 400, 
    backgroundColor: "#282c34", textAlign: "center", border:"solid 6px blue"};
  const handleName = e => {
    e.preventDefault();
    alert("Naruto Uzumaki");
  };
  return (
    <>
    <header style={myStyle}>
      <Data fullName ="Naruto Uzumaki" bio ="26 years old and I love ramen" profession="7th Hokage"></Data>
      <MyImage>picture</MyImage>
      <br></br>
      <ActionAlert handleName={handleName}></ActionAlert>
    </header>
    </>
  );
}

export default App;

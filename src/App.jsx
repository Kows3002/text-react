import './App.css';

function App() {
  return (
    <div className='cont' style={{display:"flex", flexDirection:"column", alignItems:'center', justifyContent:"center", width:'100vw'}}>
      <div>
      <h3 className="html">HTML</h3>
      <h3 className="ass1">Assignment 1</h3>
      </div>
      <h3>
        HTML tags on text arrangement, style, color. Design a page that looks
        like the text given below.
      </h3>
      <h1>Assignment 1: Basic HTML Display Features</h1>
      <h3>Here is an example of a horizontal rule:</h3>
      <hr />
      <h3>To begin, we can change the</h3>
      <h2 style={{paddingBottom:"1px", paddingTop:"0px"}}>header size</h2>
      <h3>and <span style={{ color: "blue" }}>color </span>
        <span style={{ color: "red" }}>of </span>
        <span style={{ color: "green" }}>letters</span> seen on the screen. The 
        <span style={{fontSize:"50px", fontWeight:"0px"}}>font size</span> can be changed as well, and actually gives more choices
      </h3>
      <h3>
        We can also change the appearance of words on the screen. This shows
        some differing word types in a blocked quote.
      </h3>
      <h3 className='ff'>
        Now is the <span className="style">time</span> for all good{" "}
        <span style={{fontWeight:"bold"}}>people</span> to{" "}
        <span className="bbb">come</span> to the <span className="style">aid</span> of their country.
      </h3>
      <h3>That was also an example of a nested command.</h3>
    </div>
  );
}

export default App;

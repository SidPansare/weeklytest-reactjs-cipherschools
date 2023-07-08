import './Test.css'

function Test() {

    function homef(){
        console.log('home');
    }
    function aboutf(){
        console.log('about');
    }
    function contactusf(){
        console.log('contact us');
    }

  return (
    <div>
      <div className='a'>
        <h2 onClick={homef}>Home</h2>
        <h2 onClick={aboutf}>About</h2>
        <h2 onClick={contactusf}>Contact Us</h2>
      </div>
    </div>
  )
}

export default Test
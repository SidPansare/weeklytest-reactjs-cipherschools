import './Test.css'
import styled from 'styled-components'

function Test() {
    const Divingcard = styled.div`
    position: relative;
    border:none;
    display: flex;
    justify-content: space-evenly;
    padding:1rem;`;

    const Divmainimg = styled.img`
            left: 0px;
    position:absolute;
   
    height:350px;
    width: 300px;
    border-radius: 1rem;
    `;

const Divdiscount=styled.div`
display: flex;
justify-content: space-between;
padding: 0rem;
margin-top: 2rem;
border: none;
border-radius: 1rem;
height:80px;
box-shadow: 5px 5px 10px;
&:hover{
background-color: rgb(235, 235, 235);
}
`;
const Divdiscountleft=styled.div`
width:200px;
`;

const Divdiscountright=styled.div`
 color:white;
    background-color: blueviolet;
    text-align: center;
    border-radius: 1rem;
    width: 100px;
    font-weight: bold;
`;

const Diva=styled.div`
 position: relative;
    border: none;
    height: 510px;
    border-radius: 1rem;
    box-shadow: 5px 5px 10px;
    left:0px;
    &:hover{
        transform: scale(1.02);
    }
`;

  return (
    <div>
            <Divingcard>
                
            <div className="card">
                <Diva><Divmainimg src="https://i.etsystatic.com/38265228/r/il/b66a7b/4319366204/il_1588xN.4319366204_sdjq.jpg" alt="White traditional long dress" /><p className="icon">-20%</p>
                    <img className="hicon" src="https://cdn-icons-png.flaticon.com/512/3126/3126608.png" alt="icon"></img>
                <div className="a1"><h4>White traditional long dress</h4><h4 className="dollar">$3.99</h4></div>
                <div className="colorcircle"><div className="circles"><p className="circle1"></p><p className="circle2"></p><p className="circle3"></p></div><div className="sizes"><p className="size">S</p><p className="size">M</p><p className="size">L</p></div></div>
                <div className="buystar"><img className="star" src="https://static.vecteezy.com/system/resources/previews/009/663/928/original/5-star-rating-review-star-transparent-free-png.png"></img><p className="BUY">+BUY</p></div>
                </Diva>
                <Divdiscount><Divdiscountleft><p className="grey">Monday Happy</p><p className="hash">#MONHPY</p></Divdiscountleft><Divdiscountright><p>20%</p><p>Off</p></Divdiscountright></Divdiscount>
            </div>
            
            
            <div className="card">
                <Diva><Divmainimg src="https://images.bestsellerclothing.in/data/only/24-jan-2022/175794601_g4.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" alt="Long sleeve denim jacket" /><p className="icon">-20%</p>
                    <img className="hicon" src="https://cdn-icons-png.flaticon.com/512/3126/3126608.png"></img>
                <div className="a1"><h4>Long sleeve denim jacket</h4><h4 className="dollar">$3.99</h4></div>
                <div className="colorcircle"><div className="circles"><p className="circle1"></p><p className="circle2"></p><p className="circle3"></p></div><div className="sizes"><p className="size">S</p><p className="size">M</p><p className="size">L</p></div></div>
                <div className="buystar"><img className="star" src="https://static.vecteezy.com/system/resources/previews/009/663/928/original/5-star-rating-review-star-transparent-free-png.png"></img><p className="BUY">+BUY</p></div>
                </Diva>
                <Divdiscount><Divdiscountleft><p className="grey">Payday Surprise</p><p className="hash">#PYDSPR</p></Divdiscountleft><Divdiscountright><p>15%</p><p>Off</p></Divdiscountright></Divdiscount>
            </div>
            <div className="card">
                <Diva><Divmainimg src="https://www.brides.com/thmb/XDrtr05my_E-4kGx2IrRvm5IgGw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01bridalshoes-6c03e2a9468547a181beba5673c9a184.jpg" alt="Bride heels"/><p className="icon">-20%</p>
                    <img className="hicon" src="https://cdn-icons-png.flaticon.com/512/3126/3126608.png"></img>
                <div className="a1"><h4>Bride heels</h4><h4 className="dollar">$3.99</h4></div>
                <div className="colorcircle"><div className="circles"><p className="circle1"></p><p className="circle2"></p><p className="circle3"></p></div><div className="sizes"><p className="size">S</p><p className="size">M</p><p className="size">L</p></div></div>
                <div className="buystar"><img className="star" src="https://static.vecteezy.com/system/resources/previews/009/663/928/original/5-star-rating-review-star-transparent-free-png.png"></img><p className="BUY">+BUY</p></div>
                </Diva>
                <Divdiscount><Divdiscountleft><p className="grey">First Order</p><p className="hash">#HPYFST</p></Divdiscountleft><Divdiscountright><p>25%</p><p>Off</p></Divdiscountright></Divdiscount>
            </div>
            <div className="card">
                <Diva><Divmainimg src="https://cdn.shopify.com/s/files/1/0170/0476/products/52a1f72a0394391bfc6b917f20ceda08c0cfda4a30312e75735dc1ee595de96f.jpg?v=1649202516&width=1946" alt="Athens skirt" /><p className="icon">-20%</p>
                    <img className="hicon" src="https://cdn-icons-png.flaticon.com/512/3126/3126608.png"></img>
                <div className="a1"><h4>Athens skirt</h4><h4 className="dollar">$3.99</h4></div>
                <div className="colorcircle"><div className="circles"><p className="circle1"></p><p className="circle2"></p><p className="circle3"></p></div><div className="sizes"><p className="size">S</p><p className="size">M</p><p className="size">L</p></div></div>
                <div className="buystar"><img className="star" src="https://static.vecteezy.com/system/resources/previews/009/663/928/original/5-star-rating-review-star-transparent-free-png.png"></img><p className="BUY">+BUY</p></div>
                </Diva>
                <Divdiscount><Divdiscountleft><p className="grey">Birthday Present</p><p className="hash">#BTCMFY</p></Divdiscountleft><Divdiscountright><p>20%</p><p>Off</p></Divdiscountright></Divdiscount>
            </div>
        </Divingcard>
    </div>
  )
}

export default Test
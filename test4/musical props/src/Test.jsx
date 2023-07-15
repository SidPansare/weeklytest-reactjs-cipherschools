import styled from "styled-components"
function Test({namesList,priceList}){

    const GuitarImg = styled.img`
        margin:20px;
        width:250px;
    `;
    const Items = styled.div`
        display:flex;
        height:200px;
        width:1000px;
        border: 1.5px solid black;
        justify-content: space-evenly;
    `;
    const NameList = styled.p`
    font-weight:bold;
    margin:auto;
    font-size:34px;
`;
const PriceList = styled.p`
        color:#2d2d2d;
        margin:auto;
        font-size:24px;
    `;
    const MI = styled.p`
    border:2px solid black;
    margin:auto;
    font-size:48px;
`;
    const AddtoCart=styled.button`
    border:1.5px solid black;
        margin:auto;
    `;
    return(
        <>
        <MI>Musical Items</MI>
        <div>
            <Items>
                <GuitarImg src="https://cdn.mos.cms.futurecdn.net/nhZSrYwraXobci4E4tSLRc-1200-80.jpg.webp" alt="Wood Guitar"/>
                <NameList>{namesList[0]}</NameList>
                <PriceList>{priceList[0]}</PriceList>
                <AddtoCart>Add to Cart</AddtoCart>
            </Items>
            <Items>
                <GuitarImg src="https://phamoxmusic.com/wp-content/uploads/2022/09/Bamboo_Flute_6456xv_PIC_800-1024x683.jpg" alt="Flute"/>
                <NameList>{namesList[1]}</NameList>
                <PriceList>{priceList[1]}</PriceList>
                <AddtoCart>Add to Cart</AddtoCart>
            </Items>
            <Items>
                <GuitarImg src="https://hub.yamaha.com/wp-content/uploads/2020/01/CFX_Segerstrom-93b66379-2.jpg" alt="Wood Guitar"/>
                <NameList>{namesList[2]}</NameList>
                <PriceList>{priceList[2]}</PriceList>
                <AddtoCart>Add to Cart</AddtoCart>
            </Items>
            <Items>
                <GuitarImg src="https://media.istockphoto.com/id/106375162/photo/board.jpg?s=612x612&w=0&k=20&c=s2nqpJZL3SqRuns-AE-ChMj3efGqeDSOFaIoPmpAjtk=" alt="Wood Guitar"/>
                <NameList>{namesList[3]}</NameList>
                <PriceList>{priceList[3]}</PriceList>
                <AddtoCart>Add to Cart</AddtoCart>
            </Items>
            <div>

            </div>
        </div>
        </>
    )
}
export default Test
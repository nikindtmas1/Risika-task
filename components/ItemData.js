

const ItemData = ({itemData}) => {

    console.log(itemData);
    
    return (
        <div className="container">
            <div className="items">
            <p><h3>{itemData[0]}</h3></p>
            <p><h3>{itemData[1]}</h3></p>
            <p><h3>{itemData[2]}</h3></p>
            <p><h3>{itemData[3]}</h3></p>
            <p><h3>{itemData[4]}</h3></p>
            <p><h3>{itemData[5]}</h3></p>
            <p><h3>{itemData[6]}</h3></p>  
            </div>

            <style jsx>
                {`
                .items {
                    margin: 0px 300px; 
                    width: 1090px;
                    height: 312px;
                }
                `}
            </style>
        </div>
    );
}

export default ItemData;
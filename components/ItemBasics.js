

const ItemBasics = ({itemBasic}) => {


    
    return (
        <div className="container">
            <div className="items">
            <p><h3>{itemBasic[0]}</h3></p>
            <p><h3>{itemBasic[1]}</h3></p>
            <p><h3>{itemBasic[2]}</h3></p>
            <p><h3>{itemBasic[3]}</h3></p>
            <p><h3>{itemBasic[4]}</h3></p>
            <p><h3>{itemBasic[5]}</h3></p>
            <p><h3>{itemBasic[6]}</h3></p>  
            <p><h3>{itemBasic[7]}</h3></p>  
            <p><h3>{itemBasic[8]}</h3></p>  
            <p><h3>{itemBasic[9]}</h3></p>  
            <p><h3>{itemBasic[10]}</h3></p>  
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

export default ItemBasics;
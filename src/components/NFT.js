import React from "react";

function NFT(props) {
    return(
        <div className = "Card">
            <div className = "NFT_cantainer">
                <img id = "NFT" src={props.nft} alt=""></img>
            </div>

            <div className = "content">
                <h3>{props.title}</h3>
                <p id='body'>{props.description}</p>

                <div className = 'description'>
                    <div className = "stat">
                        <img src="./images/icon-ethereum.svg" alt="ethereum_icon"></img>
                        <p id='currency'>{props.price}</p>
                    </div>

                    <div className ="stat">
                        <img src="./images/icon-clock.svg" alt="clock"></img>
                        <p id='days'>3 days left</p>
                </div>
                </div>
                
            </div>

            <div className = "footer">
                <img src={props.avatar} alt=""></img>
                <p>Creation of</p><p id='name'>{props.creator}</p>
            </div>
        </div>
    )
}

export default NFT
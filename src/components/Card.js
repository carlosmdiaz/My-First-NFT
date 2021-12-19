import React from 'react'
import NFT from './NFT'

let data = [
 
    {
      nft: "./images/image-equilibrium.jpg",
      title: "Equilibrium #3429",
      description: "Our Equilibrium collection promotes balance and calm.",
      price: "0.041ETH",
      creator: "Jules Wyvern",
      avatar: "./images/image-avatar.png"
    },
    {
      nft: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max",
      title: "Bored Ape #7990",
      description: "NFT previously owned by the greatest NBA 3 point shooter.",
      price: "0.74 ETH",
      creator: "Wardell Curry",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNpQfEygXo3j5TvVK-CuI7JeGVigQW6OgGA&usqp=CAU&quot;",
    },
    {
      nft: "https://miro.medium.com/max/1200/0*shkHtBvKu0Mh-lZ9",
      title: "Crypto Punk #348",
      description: "Part of the Crypto Punk collection in possession of Lance Toledo.",
      price: "0.134 ETH",
      creator: "Lance Toledo",
      avatar: "https://avatars.githubusercontent.com/u/50975456?s=40&v=4&quot;"
    },
  
  ]

function Card () {
    return (
        <div className = "card-container">
            {data.map((element)=> {
                return <NFT 
                    nft = {element.nft}
                    title = {element.title}
                    description = {element.description}
                    price = {element.price}
                    creator = {element.creator}
                    avatar = {element.avatar}
                />
            })}
        </div>
    )
}

export default Card

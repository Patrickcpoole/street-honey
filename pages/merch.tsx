import React from 'react'
import { client, urlFor } from "../lib/client";
import Image from "next/image";
import { MerchTyping} from "../typings";

type Props = {
	merchData: MerchTyping[],

};

const imageStyle = {
	width: "initial",
	maxHeight: "800px",
	maxWidth: "1000px",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const merch = ({ merchData}: Props) => {
  

  return (
    <>
    {merchData?.map((merch: MerchTyping) => (
    <div key={merch._id}>
      <h1>{merch.name}</h1>
      <h3>{merch.description}</h3>
      <h3>${merch.price}</h3>
      <Image
						 src={urlFor(merch.image && merch.image[0]?.asset?._ref).url()}
						style={imageStyle}
						alt="Image of the specified product"
						width={400}
						height={300}
					/>
    </div>
    ))
    }
    </>
  )
}

export const getServerSideProps = async () => {
  
  const merchQuery = '*[_type == "merch"]';
  const merchData = await client.fetch(merchQuery);

  console.log('this is merch data', merchData)
  return {
    props: {merchData}
  }
}

export default merch
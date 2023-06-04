import React from 'react'
import { client, urlFor } from "../lib/client";
import Image from "next/image";
import Merch from "../components/Merch"
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
    // <>
    // {merchData?.map((merch: MerchTyping) => (
    // <div key={merch._id}>
    //   <h1>{merch.name}</h1>
    //   <h3>{merch.description}</h3>
    //   <h3>${merch.price}</h3>
    //   <Image
		// 				 src={urlFor(merch.image && merch.image[0]?.asset?._ref).url()}
		// 				style={imageStyle}
		// 				alt="Image of the specified product"
		// 				width={400}
		// 				height={300}
		// 			/>
    // </div>
    // ))
    // }
    // </>
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 px-2 md:px-0'>
    {merchData?.map((merch: MerchTyping) => (
      <Merch
        key={merch._id} 
        merch={merch} 
        />
      
    ))}
      </div>
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
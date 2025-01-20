import Image from "next/image"
export default function TopSide(){
    return(
        <>
        <div className="max-md:grid max-ss:grid flex mt-4 ml-4">
            <div className="w-1/3 h-[340px] max-ss:w-full max-md:w-full ">
                <Image src={"/shoes.jpeg"} alt="" width={450} height={250} />
        
             </div>
             <div className="max-md:w-[390px] max-2xl:w-1/2 ">
                <h2 className="text-[28px] font-bold ml-6">Shoes store</h2> 
                <h2 className="text-[20px] ml-6 ">Winter shoe collections prioritize warmth and protection, featuring insulated boots, waterproof materials like leather and suede, and often incorporate fur or fleece linings. Styles range from rugged hiking boots to stylish ankle boots and cozy slippers. Summer collections focus on breathability and comfort, using lightweight materials like canvas, mesh, and leather</h2>
        
             </div>
        
        </div>
        </>
    )
}
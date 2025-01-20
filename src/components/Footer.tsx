import { FaFacebook, FaTwitter, FaInstagram, FaYoutube,  FaLandmark } from 'react-icons/fa';
// import Link from 'next/link';

export default function Footer(){
    return(
        <div className="max-2xl:mt-6 max-ss:w-[440px] max-ss:h-[340px] max-ss:mt-[440px] w-[1440px] h-[331px] bg-[rgb(17,17,17)] ">
        <footer className="  h-[241px]   flex text-[#FFFFFF] ml-[200px] max-ss:ml-5 ">
<div className='flex ml-[34px]  mt-[40px] '>
<div className='w-[245px] '> 
<li className=" list-none font-semibold text-[19px] mb-[20px]">Latest Shoes</li>
<div className='text-[10px] gap-[20px] grid '>
<li className="list-none text-[16px]">Child Collection</li>
<li className="list-none text-[16px]">Men</li>
<li className="list-none text-[16px]">Womennpm </li>
</div>

</div>
{/* 2 */}
<div className='max-ss:ml-[-80px] w-[245px] '> 
<div className="  font-semibold text-[19px] mb-[20px]">Contact</div>
<div className='text-[10px] gap-[20px] grid text-[#7E7E7E] '>
<div className='  gap-3 '> 
<div className='flex '>
    <p className='mt-2 text-white text-[16px]'>Facbook</p>
<FaFacebook className='bg-black rounded-[30px] ml-2  ' size={30} color="gray" />
</div>
<div className='flex '>
    <p className='mt-2 text-white text-[16px]'>Twitter</p>
    <FaTwitter className='bg-black rounded-[30px] ml-2' size={30} color="gray" />
</div>
<div className='flex '>
    <p className='mt-2 text-white text-[16px]'>Instagram</p>
    <FaInstagram className='bg-black rounded-[30px] ml-2' size={30} color="gray" />
</div>
<div className='flex '>
    <p className='mt-2 text-white text-[16px]'>Youtube</p>
    <FaYoutube className='bg-black rounded-[30px] ml-2' size={30} color="gray" />
</div>

</div>


</div>

</div>


{/* 3 */}
<div className='w-[245px] max-ss:hidden '> 
<li className=" list-none font-semibold text-[19px] mb-[20px]">Guide</li>
<div className='text-[10px] gap-[20px] grid '>
<li className="list-none text-[16px]">Term of Sale</li>
<li className="list-none text-[16px]">About us</li>
<li className="list-none text-[16px]">Privacy Policy</li>
</div>

</div>

</div>

</footer>

{/* bottom */}
<div className='w-[1372px] max-ss:ml- max-ss:ml-4  h-[62px] text-white mt-[56px] ml-[230px] '>
<div className='w-[px]  h-[32px] flex flex-wrap gap-3 text-[11px] '>
<FaLandmark />
<p>Pakistan</p>
<p className='max-ss:ml-2 ml-[200px] text-[#7E7E7E] '>© 2025 Blogger Creative, Inc. All Rights Reserved</p>


</div>

</div>
</div>
    )

}
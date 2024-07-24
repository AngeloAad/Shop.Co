import React from 'react'
// import { logo } from '../assets'
import { footerLinks } from '../constants'
import { social } from '../assets/icons'
import { banks } from '../assets/images'

const Footer = () => {
  return (
    <section className="flex-center padding-y flex-col">

      <div className="flex-start md:flex-row flex-col
      w-full">
        <div className="flex flex-col justify-start
        mr-36">
          <h4 className="font-montserrat text-[34px] font-black">SHOP.CO</h4>
          <p className="w-[248px] p-g mt-4
          leading-[22px] text-[14px] pb-6"> 
            We have clothes that suits your style and which 
            you’re proud to wear. From women to men.
          </p>
          <img src={social} alt="socials" 
          className="h-[28px] w-[144px]"/>
        </div>

        <div className="w-full flex flex-row 
        justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className={`flex
            flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className="font-montserrat font-medium
              text-[16px] leading-[18px] mb-4">
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`p-g 
                  text-[16px] leading-[36px]
                  hover:text-black cursor-pointer
                  ${index === footerLink.links.length -1 ?
                    'mb-6' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center
      md:flex-row flex-col pt-6 mt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="text-center font-normal
        text-[14px] leading-[27x] p-g">
          Shop.co © 2000-2023, All Rights Reserved
        </p>

        <img src={banks} alt="" />

        {/* <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
             src={social.icon}
             alt={social.id}
             key={social.id}
             className={`w-[21px] h-[21px] object-contain
              cursor-pointer ${index !== socialMedia.length -1 ?
                'mr-6' : 'mr-0'
              }`} />
          ))}
        </div> */}
      </div>

    </section>
  )
}

export default Footer
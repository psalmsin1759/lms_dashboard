"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import Link from "next/link"
import CardBox from "@/shared/components/layout/shared/CardBox"

const TopCards = () => {

  const TopCardInfo = [
    {
      key: "card1",
      title: "Total Courses",
      desc: "24",
      img: "/images/svgs/icon-mailbox.svg",
      bgcolor: "bg-primary/10",
      textclr: "text-primary",
      url: "/courses"
    },
    {
      key: "card2",
      title: "Enrolled Students",
      desc: "1,284",
      img: "/images/svgs/icon-user-male.svg",
      bgcolor: "bg-success/10",
      textclr: "text-success",
      url: "/students"
    },
    {
      key: "card3",
      title: "Instructors",
      desc: "18",
      img: "/images/svgs/icon-briefcase.svg",
      bgcolor: "bg-info/10",
      textclr: "text-info",
      url: "/instructors"
    },
    {
      key: "card4",
      title: "Active Enrollments",
      desc: "842",
      img: "/images/svgs/icon-connect.svg",
      bgcolor: "bg-warning/10",
      textclr: "text-warning",
      url: "/enrollments"
    },
    {
      key: "card5",
      title: "Assignments",
      desc: "56",
      img: "/images/svgs/icon-mailbox.svg",
      bgcolor: "bg-secondary/10",
      textclr: "text-secondary",
      url: "/assignments"
    },
    {
      key: "card6",
      title: "Certificates Issued",
      desc: "320",
      img: "/images/svgs/icon-favorites.svg",
      bgcolor: "bg-info/10",
      textclr: "text-success",
      url: "/certificates"
    },
    {
      key: "card7",
      title: "Pending Reviews",
      desc: "12",
      img: "/images/svgs/icon-speech-bubble.svg",
      bgcolor: "bg-error/10",
      textclr: "text-error",
      url: "/reviews"
    },
    {
      key: "card8",
      title: "Revenue",
      desc: "$48,920",
      img: "/images/svgs/icon-briefcase.svg",
      bgcolor: "bg-primary/10",
      textclr: "text-primary",
      url: "/finance"
    },
  ]



  return (
    <>
      <div>
        <Swiper
          slidesPerView={6}
          spaceBetween={24}
          loop={true}
          freeMode={true} 
          grabCursor={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1030: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {
            TopCardInfo.map((item) => {
              return (
                <SwiperSlide key={item.key} >
                  <Link href={item.url} >
                    <CardBox className={`shadow-none ${item.bgcolor} w-full border-none!`}>
                      <div className="text-center hover:scale-105 transition-all ease-in-out">
                        <div className="flex justify-center">
                          <Image src={item.img}
                            width="50" height="50" className="mb-3" alt="profile-image" />
                        </div>
                        <p className={`font-semibold ${item.textclr} mb-1`}>
                          {item.title}
                        </p>
                        <h5 className={`text-lg font-semibold ${item.textclr} mb-0`}>{item.desc}</h5>
                      </div>
                    </CardBox>
                  </Link>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>
    </>
  )
}
export { TopCards }
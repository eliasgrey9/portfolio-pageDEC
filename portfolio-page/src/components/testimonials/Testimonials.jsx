// import React from "react";
// import "./testimonials.css";
// import me from "../../assets/me.jpg";
// import { Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

// const data = [
//   {
//     avatar: me,
//     name: "Elias Grey",
//     avatar: me,
//     review:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, maiores, rem aliquid culpa nam ipsam impedit ipsum voluptatum ullam minima provident amet recusandae mollitia deleniti repellendus esse quidem, ut perspiciatis?",
//   },
//   {
//     avatar: me,
//     name: "Elias Grey",
//     avatar: me,
//     review:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, maiores, rem aliquid culpa nam ipsam impedit ipsum voluptatum ullam minima provident amet recusandae mollitia deleniti repellendus esse quidem, ut perspiciatis?",
//   },
//   {
//     avatar: me,
//     name: "Elias Grey",
//     avatar: me,
//     review:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, maiores, rem aliquid culpa nam ipsam impedit ipsum voluptatum ullam minima provident amet recusandae mollitia deleniti repellendus esse quidem, ut perspiciatis?",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials">
//       <h5>Review from my classmates</h5>
//       <h2>Testimonials</h2>

//       <Swiper
//         className="container testimonials_container"
//         modules={[Pagination, Navigation]}
//         navigation
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//       >
//         {data.map(({ avatar, name, review }, index) => {
//           return (
//             <SwiperSlide key={index} className="testimonial">
//               <div className="client_avatar">
//                 <img src={avatar} alt="testimonial image" />
//               </div>

//               <h5 className="client_name">{name}</h5>
//               <small className="client_review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonials;

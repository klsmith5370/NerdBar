import React from 'react'
import { Container } from '@material-ui/core'
import { Link } from "react-router-dom"
import Slider from "react-slick";

const ProfileSlider = ({ recipes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className='slider'>
          <Link to={`/characterRecipes/${recipe.id}`}>
          <Typography variant="h6">{recipe.recipeName}</Typography>
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default ProfileSlider;


// const ProfileSlider = (props) => {
//     const { recipes } = props || []
//     const items = recipes || []


//     let settings = {
//         dots: items.length < 50,
//     speed: 500,
//     slidesToShow: 10,
//     slidesToScroll: 10,
//     initialSlide: 0,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1700,
//         settings: {
//           slidesToShow: 7,
//           slidesToScroll: 7,
//         },
//       },
//       {
//         breakpoint: 1300,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 5,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: false,
//         },
//       },
//     ],
//   };

//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           ...style,
//           display: "block",
//           // content: " url(../images/next.png)",
//         }}
//         onClick={onClick}
//       />
//     );
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           ...style,
//           display: "block",
//         //   content: " url(../images/back.png)",
//         }}
//         onClick={onClick}
//       />
//     );
//   }

//   return (
//     <Container className="slider">
//         <Slider {...settings}>
//             {items.length !== 0 ? (
//                 items.map((item) => (
//                     <div key={item.id}>
//                       <Link to={`/${item.recipes}s/${item.id}`}>
//                         <img src={item.characterImage} alt='character image' />
//                       </Link>
//                     </div>
//                 ))
//             ) : (
//                 <div>Nothing featured</div>
//             )}

//         </Slider>
//     </Container>
//   )
// }

// export default ProfileSlider

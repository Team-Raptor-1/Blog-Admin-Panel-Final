import { AiFillDelete } from "react-icons/ai";
import {AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from 'react';
import '../styles/AllBlogs.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';

const AllBlogs = () => {

  const blogs = [
    {
      id: 1,
      Image: img1,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 2,
      Image: img2,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 3,
      Image: img3,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 4,
      Image: img4,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 5,
      Image: img5,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 7,
      Image: img6,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

    {
      id: 8,
      Image: img7,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },


    {
      id: 9,
      Image: img8,
      title: "lorem ipsum",
      address: "Air Conditioner",
      dot: <AiFillDelete />,
      location: <AiFillEdit />,

    },

  ]


  return (
    <section id='allblogs'>



      <form className="example" action="">
        <input type="text" placeholder="Search for Blogs" name="search" />
        <button type="submit"><i className="fa fa-search"></i></button>



      </form>


      <h1> All Blogs</h1>


      <div className="scroll">


     


        <div className="objects">
          {blogs.map(function (data) {
            return (
              <div className="property">


                <img src={data.Image} alt="" />

                <div className="title">
                  <span>{data.title}</span>
                </div>


                <div className="description">
                  <span >{data.address}</span>
                </div>

                <div className="description">
                  <span >{data.address}</span>
                </div>

                    
                <p>{data.dot} &nbsp; <Link to="/update"><AiFillEdit style={{ color: 'black' }}/></Link> </p>






              </div>
            )
          })}
        </div>




      </div>



    </section>
  )
}

export default AllBlogs
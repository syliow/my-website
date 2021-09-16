import React from "react";
import Image from "react-bootstrap/Image";
import MyPic from "../my_pic.jpg";

export default function AboutMe() {
  return (
    <section id="about">
      <div>
        <Image src={MyPic} alt="MyPic" roundedCircle className="mt-5" />
      </div>
      <div className="container">
        <h1 className="text-white mt-5">Liow Shan Yi</h1>
        <h5 className="text-white mt-5">
          Taylor's University Computer Science fresh graduate.
        </h5>
      </div>
    </section>
  );
}

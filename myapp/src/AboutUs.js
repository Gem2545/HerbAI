import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="container">
      <section className="about">
        <h1> About Us </h1>{" "}
        <div className="about-info">
          <div className="about-img">
            <img
              src="https://images.unsplash.com/photo-1551772413-6c1b7dc18548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Geeksforgeeks"
            />
          </div>{" "}
          <div className="about-text">
            <p>
              Welcome to HerbQuest, where we 're passionate about nurturing
              knowledge and wisdom through the power of visual insight.{" "}
            </p>{" "}
            <p>
              At HerbQuest, we believe that herbs hold the key to a world of
              health, wellness, and culinary delight.Our mission is to empower
              individuals like you to explore, cultivate, and understand herbs
              better.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="team">
        <h1> Meet The Big 3 </h1>{" "}
        <div className="team-cards">
          <div className="card">
            <div className="card-img">
              <img
                src="https://media.licdn.com/dms/image/C5603AQGDxh74v78lxg/profile-displayphoto-shrink_800_800/0/1660530864352?e=2147483647&v=beta&t=bI19JEbB2Z6_JDbCJeE7NiwoGm4Gz-2Rym5FyETGaAQ"
                alt="User 1"
              />
            </div>{" "}
            <div className="card-info">
              <h2 className="card-name"> Mr.Pornpipat Kitireanglarp </h2>{" "}
              <p className="card-id"> 6410660 </p>{" "}
              <p className="card-role"> Backend Dev </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card">
            <div className="card-img">
              <img
                src="https://media.licdn.com/dms/image/C5603AQGbUbNSvFF3Og/profile-displayphoto-shrink_800_800/0/1660531970671?e=2147483647&v=beta&t=tV-fKK2Va1Hj9iiU6CwKQkGYvZILoKhpcYC0mzXM4J4"
                alt="User 2"
              />
            </div>{" "}
            <div className="card-info">
              <h2 className="card-name"> Mr.Viput Traikityanukul </h2>{" "}
              <p className="card-id"> 6416710 </p>{" "}
              <p className="card-role"> Frontend Dev </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card">
            <div className="card-img">
              {" "}
              <img
                src="https://media.licdn.com/dms/image/C4E03AQHb4MLVKBjZQA/profile-displayphoto-shrink_800_800/0/1660546854731?e=1701302400&v=beta&t=oApP_gqzG2rvgBmMtXHcvfmIhFJ4S7ro7saZoo3oDJk"
                alt="User 3"
              />{" "}
            </div>{" "}
            <div className="card-info">
              <h2 className="card-name"> Mr.Sulaimarn Wisit </h2>{" "}
              <p className="card-id"> 6410481 </p>{" "}
              <p className="card-role"> Cloud Service </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <footer className="footer">
        & copy; 2023 HerbQuest - Herbal Awareness.All rights reserved.{" "}
      </footer>{" "}
    </div>
  );
}

export default AboutUs;

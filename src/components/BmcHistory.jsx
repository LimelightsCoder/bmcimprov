import React from "react";
import { Link } from "react-router-dom";
import img1 from "/src/assets/4-20_FourthWall_BernieMacAndCheese_147.jpeg";
import img2 from "/src/assets/4-20_FourthWall_BernieMacAndCheese_161.jpeg";
import seenOn from "/src/assets/asSeenOn.png";

const BmcHistory = () => {
  return (
    <div>
      <div className="flex mf:flex-row flex-col items-center justify-between mf:p-20 pb-12 pt-36 pr-12">
        <div className="flex flex-1 justify-start flex-col mf:mr-10 ml-10 items-start">
          <h1
            className="sm:text-9xl text-[#0d0630] py-10 text-5xl gothic responsive-text"
            style={{ textAlign: "left", fontWeight: 900}}
          >
            <span className="responsive-text">MEET<br />THE<br />
            TEAM...</span>
          </h1>
          {/* img space 1 */}
          <div className="flex flex-col sm:flex-row">
            <p
              className="text-center mt-5 text-[#0d0630] font-light mf:w-full text-base paragraph"
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "20px",
                paddingRight: "50px",
                paddingLeft: "10px",
                paddingBottom: "15px",
              }}
            >
              Bernie Mac & Cheese is a long-form improv troupe that began in
              January 2019 as a practice group that has evolved into a team with
              multiple Los Angeles residencies and a buzzing name in the LA
              improv and comedy scene. BMC comprises 9 talented improvisers who
              bring their diverse cultural backgrounds, experiences, and talents
              to the team.
              <br />
            </p>
            <div className="flex flex-col roboto text-gray-300 ">
              <img src={img1} alt="image space 1" />
              <p>
                Image: David Hume Kennerly Photography <br />
                Bernie Mac & Cheese at the Westside Comedy <br /> Theater in
                Santa Monica
              </p>
            </div>
          </div>
          {/* Img space 2 */}
          <div className="pt-10">
            <p
              className="text-left mt-5 text-[#0d0630] font-light mf:w-full text-base paragraph"
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "20px",
                paddingRight: "50px",
                paddingLeft: "10px",
              }}
            >
              Founded by Sean Grant, BMC was originally a practice group but
              quickly became a performing team. With the vision to be part of a
              new wave of improv entertainment, BMC sought new audiences to the
              artform. Their first long-form improv show was at a hip-hop club
              in Downey, CA and the wave certainly made splashes. The team soon
              gained traction around the city competing in The Pack Theater
              “Death Match,” — a weekly battle between long form improv teams,
              where teams spin a wheel to determine the form of play ranging
              from improvised musicals to monologues. BMC won 10 weeks in a row,
              eventually winning The Tournament of Champions as well as a
              coveted spot as a Pack Theater house team. Other accolades and
              awards include a packed audience night at The Comedy Central
              Stage, a spot in the 3rd annual Westside Comedy Festival, and
              offered a performance residency at The Clubhouse. Amid all this
              momentum, unfortunately, the Covid-19 pandemic hit and well, you
              know the story . . .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row pt-10">
            <div className="flex flex-col roboto text-gray-300">
              <img src={img2} alt="image space 2" />
              <p>
                Image: Jenn the Jack Photograpy <br />
                Bernie Mac & Cheese at the Fourth Wall Comedy Cafe
              </p>
            </div>
            <p
              className="text-center mt-5 text-[#0d0630] font-light mf:w-full text-base paragraph"
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "20px",
                paddingRight: "50px",
                paddingLeft: "10px",

              }}
            >
              But in 2021, the team resumed focus and play and quickly earned
              multiple residencies at the Westside Comedy Theater, The Pasadena
              Comedy, The Fourth Wall Comedy café and by 2022, they participated
              in the Burbank Comedy Festival. The team continues to be invited
              to and perform at various venues around LA, often performing two
              to three times a week. Check <Link to="/show-dates" className="text-blue-400">HERE</Link> for links to their next show!
              <br />
              <div className="flex flex-col pt-10">
                <p style={{fontWeight: "bold", fontFamily: "Roboto"}}>What makes BMC special?</p>
                <p style={{fontWeight: "bold", paddingTop: "20px", fontFamily: "Roboto",}}>Chemistry. Commitment. Consistency. Camaraderie.</p>
                <p style={{fontWeight: "bold", paddingTop: "20px", fontFamily: "Roboto",}}>The most notable feedback BMC receives is the evident chemistry of the group on stage — and off. The troupe practices weekly, spends non-performance days together, collaborates on projects, supports one another’s creative endeavors, and simply just laughs and enjoys one another’s company! BMC is full of fun, focus, and friendship and has evolved into a supportive family. After a show, it’s a common sight to see the group still gathered, laughing and reflecting on the performance. This dynamic makes the ensemble’s connection special!</p>
                <p style={{paddingTop: "20px", fontFamily: "Roboto",}}>To witness BMC, check out their YouTube videos, Instagram, TikTok and Facebook profiles. You can even watch them warmup on Instagram Live before every show!</p>
              </div>
            </p>
          </div>
            {/* CURRENT MEMBERS AND ALUMI */}
            <div className="flex flex-row sm:flex-row pt-10">
              <div>
                <p style={{fontWeight: 700, fontFamily: "Roboto", fontSize: "20px", paddingRight: "10px"}}> <strong>Current Main Company Members are:
                  Alexis Bradby, Simone Finley, Sean Grant, Tatyana “Guchi” Komaguchi, & Jeremiah White.</strong>
                </p>
              </div>
              <p style={{fontWeight: 100, fontFamily: "Roboto"}}>BMC Alumni are: <br />
                 Trymaine Alfred, Misha Gonz Cirkl, Rosena Coronet, <br /> JR Cruz, Rocky Cusseaux, Franklin Grace, Adam Johns, Terrell Thompson, Myra Whittington, Michael Scott, Teru Mitsuhara, Hillina Jarso, and Chris Lewis.</p>
            </div>
          <br />
          <br />
              <div>
                <div className="flex mf:flex-row flex-col items-center justify-between mf:p-20 py-12 px-4">
                  <img src={seenOn} alt="as seen on" />
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default BmcHistory;

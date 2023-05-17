import React, { useState, useEffect } from "react";
import Sean from "../src/assets/sean.jpeg";
import Taty from "../src/assets/taty.jpeg";
import Simone from "../src/assets/simone.png";
import Jay from "../src/assets/jaywhite.jpeg";
import Alexis from "../src/assets/alexis.jpeg";
import { Link } from "react-router-dom";

const Squad = () => {
  const handleScrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  return (
    <div>
      <div className="flex mf:flex-row flex-col items-center justify-between mf:p-20 py-12 pr-12">
        <div className="flex flex-1 justify-start flex-col mf:mr-10 ml-10 items-start">
          <h1
            className="sm:text-6xl text-[#0d0630] py-20 text-5xl gothic"
            style={{ fontSize: "180px", textAlign: "center" }}
          >
            <span className="responsive-text">THE <br /> SQUAD</span>
          </h1>

          {/* Member 1 */}

          <div>
            <div className="justify-between flex flex-col">
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Sean Grant
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row">
              <p
                className="text-center mt-5 text-[#0d0630] font-light mf:w-9/12 w-11/12 text-base img-summary"
                style={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  fontWeight: 400
                }}
              >
                Sean Grant the founding member of Bernie Mac & Cheese has been
                featured on Seasons 1 & 2 of Tru TV’s Laff Tracks, was a 2019
                JFL New Face
                <br />
                <br />
                inductee and selected as one of the 10 comics to watch in 2020
                by Timeout LA. His debut comedy album releasedComedy Records
                reached the top of the Amazon Sales charts in it's first week.
                His stand up sets on Comedy Central's & Don't Tell Comedy's
                pages have reached over 2 million views.
                <br />
                <br />
                While attending Florida State University Sean won a Nationwide
                talent search in order to be named Funniest College Kid in
                America on Jimmy Kimmel Live! He has made guest TV appearances
                on Meet the Browns on TBS , Maron on IFC and WTF Baron Davis on
                IFC.
                <br />
              </p>
              <div className="img-gallery">
                <img src={Sean} alt="sean" />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />

          {/* Member 2 */}

          <div>
            <div className="justify-between flex flex-col">
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  textAlign: "center",
                  paddingRight: "30px",
                }}
              >
                Tatyana Komaguchi <br /> "GUCHI"
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="img-gallery2">
                <img src={Taty} alt="taty" />
              </div>
              <p
                className="text-center mt-5 text-[#0d0630] font-light mf:w-9/12 w-11/12 text-base img-summary2"
                style={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  fontWeight: 400
                }}
              >
                The Creative Director of Bernie Mac & Cheese. Tatyana Guchi is a
                Stand-Up Comedian that has performed on major stages all over
                the US. Getting her start at the Broadway Comedy in Manhattan,
                New York. She is a prolific writer and actor that focuses on
                Black, Queer, and Asian issues. Tatyana studied the art of
                improv at the world famous Upright Citizens Brigade in New York
                City. Following her move to Los Angeles, California in 2018 she
                has performed at the Comedy Store, San Diego Laugh Factory and
                Hollywood Improv
                <br />
                <br />
                Tatyana has made her on screen debut at the Asian Pacific Film
                Festival, and 48 Hour Film. Her goals are to become an on screen
                comedic and dramatic actor for film and televison, think the
                Lady Jamie Foxx.
                <br />
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* Member 3 */}
          <div>
            <div className="justify-between flex flex-col">
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  textAlign: "center",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
              >
                Simone Finley
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row">
              <p
                className="text-center mt-5 text-[#0d0630] font-light mf:w-9/12 w-11/12 text-base img-summary"
                style={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  fontWeight: 400
                }}
              >
                Simone Finley is an actor, model and improviser born and raised
                in Los Angeles. Simone studied improv at Cerritos College while
                earning her Undergraduate degree in English &amp; Theater. In
                addition to her list of talents, Simone had her own segment on
                the Social Hour Radio Station called the “Urban Rise”. Simone
                has made her on-screen debut in the short film “Bread Hunt”
                directed by Justin Johnson, following this her role in
                “Validated Freedom” directed by Jason Keith Taylor. &nbsp;She is
                known for her theatrical performances in works like “To Kill a
                Mocking Bird”.
                <br />
                <br />
                Simone is a content creator and influencer amassing a following
                of over 132K followers. Simone Finley will be making her
                stand-up debut in 2022.
                <br />
              </p>
              <div className="img-gallery">
                <img src={Simone} alt="simone" />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          {/* Member 4 */}
          <div>
            <div className="justify-between flex flex-col">
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  textAlign: "center",
                  paddingRight: "30px",
                }}
              >
                Jeremiah “Jay” <br /> White
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="img-gallery2">
                <img src={Jay} alt="jay" />
              </div>
              <p
                className="text-center mt-5 text-[#0d0630] font-light mf:w-9/12 w-11/12 text-base img-summary2"
                style={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  fontWeight: 400
                }}
              >
                Jay White is a standup comedian and actor from the city of Long
                Beach, California. He has performed all over the US from coast
                to coast . In addition to being part of Bernie Mac and Cheese,
                Jay is also a theatrical performer in the following prodctions;
                “A Soldiers Play”, “Julius Caesar”, “Psycho Beach Party”, “A
                River Niger”. Jay is a sketch writer for BMC. He was featured in
                “Daycation” a live sketch show. Jay has been an improvisor for
                over 11 years having studied at varies colleges and the
                Groundlings Improv School.
                <br />
                <br />
                He’s the loving father of a son, this informs his comedy being a
                single father. 
                <br />
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* Member 5 */}
          <div>
            <div className="justify-between flex flex-col">
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  textAlign: "center",
                  paddingLeft: "40px",
                }}
              >
                {" "}
                Alexis Bradby
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row">
              <p
                className="text-center mt-5 text-[#0d0630] font-light mf:w-9/12 w-11/12 text-base img-summary"
                style={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  fontWeight: 400
                }}
              >
                Originally from Tennessee, Alexis Bradby started her stand-up
                journey shortly after moving to Los Angeles, California in 2015.
                Since then, she has performed at all of the major comedy clubs
                in Los Angeles and in various cities all over the US. Alexis is
                known for her contagious smile and youthful energy, which led to
                her being featured on Holey Moley (ABC), The Price is Right
                (CBS), and iCarly (Paramount+). New to improv, Alexis has been
                "learning on the job" since joining BMC in August 2021.
                <br />
              </p>
              <div className="img-gallery">
                <img src={Alexis} alt="alexis" />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          {/* Back to top button */}

            <Link to="/squad"             
            onClick={handleScrollToTop}
            className=" text-black font-bold flex items-center flex-col justify-center text-center"
            style={{ position: "flex", bottom: "20px", zIndex: "50", fontFamily: "Roboto", fontSize: "20px"}}>Back to Top</Link>


        </div>
      </div>
    </div>
  );
};

export default Squad;

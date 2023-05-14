import React from "react";
import bmcimg from "/Users/coryparrish/Desktop/bmc_app_ui/client/src/assets/bmcimg.png";
import budo from "/Users/coryparrish/Desktop/bmc_app_ui/client/src/assets/budokan.png";

const Classes = () => {
  return (
    <div>
      <div className="flex mf:flex-row flex-col items-center justify-between mf:p-20 pb-12 pt-36 pr-12 pl-10">
        <div className="flex flex-1 justify-center flex-col sm:flex-row mf:mr-10 ml-10 items-center">
          <h1
            className="text-[#0d0630] py-20 sm:text-8xl text-5xl gothic text-left"
            style={{
              fontWeight: 900,
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <span className="responsive-text">TAKE A CLASS WITH US...</span>
          </h1>

          <div className="text-center">
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                textAlign: "center",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingBottom: "40px",
              }}
            >
              The Open Community <br /> Improv Workshop
            </h2>
            <p
              style={{
                wordBreak: "break-word",
                paddingLeft: "40px",
                paddingRight: "40px",
                fontFamily: "Poppins",
                fontSize: "20px",
              }}
            >
              The Open Community Improv Workshop is structured weekly at the 101
              level. People of all experience levels will feel comfortable with
              all of the exercises.Each class begins with warmups followed by
              games that focus on character development, pattern recognition and
              scene building. We end each hour with fun cool-downs and positive
              affirmations.
              <br />
              <br />
              Students who take advantage of monthly subscriptions will be given
              the option to receive more advanced notes and resources to help
              move them along in the improv and acting communities; should they
              so desire.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* class info */}
        <div
          style={{
            fontSize: "18px",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "20px",
          }}
        >
          <p>
            <strong>Location:</strong>Terasaki Budokan Community Room & Plaza
            <br />
            <br />
            <strong>Schedule:</strong> Tuesdays 8:15pm - 9:45pm
            <br />
            <br />
            <strong>Cost:</strong> $10 per workshop or $30 for 4 workshops
            <br />
            <br />
            <strong>Registration:</strong> Pre-register using the link below.
            <br />
            <br />
            <strong>Contact:</strong> TeraBudo@LTSC.org
          </p>
          <br />
          <br />
          <br />
          <div>
            <h2>
              <strong>Sign up today!</strong>
            </h2>
            <br />
            <br />
            <p>
              Open Community Improv - April 2023 | Tuesdays 8:15pm-9:45pm <br />
              $30.00
            </p>
            <br />
            <div className="h-[1px] w-full bg-[#6761A8] my-2" />
            <br />
            <p>
              Improv - Single Class <br /> $10.00
            </p>
            <br />
            <div className="h-[1px] w-full bg-[#6761A8] my-2" />
            <br />
          </div>
          <div
            className="text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <a
              href="https://give.ltsc.org/event/the-open-community-improv-workshop/e444685/register/new/select-tickets"
              className="bg-[#3A86FF] hover:bg-[#FFBE0B] text-white font-bold py-2 px-8 rounded-full shadow-xl"
              style={{ fontFamily: "Roboto",
              }}
            >
              Register Here
            </a>
          </div>
          <div className="flex flex-row pt-20 items-center justify-center">
          <img src={budo} alt="Budo" style={{width: "100px", height: "100px"}}/>
            <img src={bmcimg} alt="Bmcimg" style={{width: "100px", height: "100px"}}/>

          </div>


          
        </div>
      </div>
    </div>
  );
};

export default Classes;
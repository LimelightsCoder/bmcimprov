import { useRef, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ShowDates = () => {
  
  return (
    <div>
      <div className="flex mf:flex-row flex-col items-center justify-between mf:p-20 py-12 pr-12">
        <div className="flex flex-1 justify-center flex-col mf:mr-10 ml-10 items-center">
          <h1
            className="text-[#0d0630] py-20 text-9xl gothic"
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            justifyItems: "center"
            }}
          >
            <span className="responsive-text text-center justify-center flex">WHERE TO FIND US</span>
          </h1>

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
              href="https://linktr.ee/bmcimprov"
              className="text-black font-bold"
              style={{
                zIndex: "5",
                fontSize: "30px",
                paddingBottom: "12px",
              }}
            >
              Click Here For Tickets
            </a>
          </div>
          {/* Embed Google calendar */}
          <div >
          <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showPrint=0&showTabs=1&showNav=1&showTitle=0&showTz=1&showCalendars=0&mode=AGENDA&src=Z2duaXRzcDZhajI2azJzY2RnbW1nb2IwNXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB"
              className="google-calendar"
              allowFullScreen
              title="Google Calendar"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDates;

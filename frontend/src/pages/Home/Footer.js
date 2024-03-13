import React from "react";

export default function Footer() {
  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-gray-200"></div>

      <div className="flex items-center justify-center flex-col mt-10 opacity-70">
        <footer
          style={{
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            color: "white",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ marginBottom: "20px" }}>
              <h3 className="text-secondary font-semibold">
                "Web Developer || Programmer"{" "}
              </h3>
              <p>
                "Every great developer you know got there by solving problems
                they were unqualified to solve, until they actually did it."
              </p>
            </div>
          </div>
          <div style={{ background: "darkblue", padding: "20px 0" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div>
                <p style={{ margin: "0", fontSize: "14px" }}>
                  &copy; 2023 Anand Gautam. All rights reserved. | Designed with
                  "MERN"
                  <i className="fas fa-heart"></i> By Anand Gautam
                </p>
                <hr
                  style={{
                    margin: "10px 0",
                    border: "0",
                    borderTop: "1px solid #white",
                  }}
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

import React from "react";

function Footer() {
  return (
    <div>
      <p className="mb-1 mt-4 text-center opacity-50">
        {" "}
        &copy; {new Date().getFullYear()} Vaibhav Meena. All rights reserved.
      </p>{" "}
    </div>
  );
}

export default Footer;

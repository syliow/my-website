import React from "react";
import { Button } from "react-bootstrap";
import ResumePdf from "../Liow_Shan Yi_Resume.pdf";

export default function MyButton() {
  return (
    <div className="mt-5">
      <a href={ResumePdf} target="_blank">
        <Button className="mt-5 mb-5" variant="light">My Resume</Button>
      </a>
    </div>
  );
}



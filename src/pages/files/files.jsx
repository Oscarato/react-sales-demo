import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";
import FilesUploadComponent from '../../components/uploadFiles';

export function Files() {
  
  const [counterWords, setCounterWords] = useState(0)

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" className="mb-8 p-6 h-60">
          <Typography variant="h6" color="blue">
            Archivos
          </Typography>
          
          <Typography variant="h6" color="black">
            <div className="grid gap-y-2 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
              <p>El archivo contiene <b>{counterWords}</b> palabras</p>
            </div>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <div className="files">
            <FilesUploadComponent handleResponse={setCounterWords}/>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Files;

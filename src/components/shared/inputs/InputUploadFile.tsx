import clsx from 'clsx';
import React, { HTMLProps, useRef, useState } from 'react';
import { MdOutlineAttachment } from "react-icons/md";

interface TProps extends HTMLProps<HTMLInputElement>{
  name : string;
  onChangeCustome: (e: { target: { name: string; files: FileList } }) => void
}

const InputUploadFile: React.FC<TProps> = (props) => {
  const {name,onChangeCustome, ...args} = props;
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onChangeCustome({
      target: {
        name,
        files: e.dataTransfer.files,
      },
    })
    setDragActive(false)
  }
  
  const handleOnClickInput = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    e.stopPropagation()
    e.preventDefault()
    inputRef?.current?.click()
  }

  return (
    <div>
      <div 
        className={clsx({
          'bg-card-gray text-text-gray flex-col cursor-pointer hover:brightness-[85%] rounded-md p-base flex items-center justify-center h-[15rem]' : true,
          'brightness-[85%]' : dragActive
        })}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleFileDrop}
        onClick={handleOnClickInput}
      >
        <MdOutlineAttachment size={"25"}/>
        <p className='text-center underline'>
          Drag and drop files, or Browser
        </p>
        <p className='text-center text-small  font-normal underline'>
          Support formats : png, jpg, jpeg, mp4,
          <br/>
          Max size : 500Mb
        </p>
      </div>
      <input
        ref={inputRef}
        type='file'
        name={name}
        accept=".png, .jpg, .jpeg"
        {...args}
        hidden
      />
    </div>
  );
};

export default InputUploadFile;
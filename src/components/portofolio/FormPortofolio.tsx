"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../shared/Button';
import Card from '../shared/Card';
import InputUploadFile from '../shared/inputs/InputUploadFile';

interface TProps {
  // Add your prop types here
}

const FormEditPortofolio: React.FC<TProps> = (props) => {
    const router = useRouter()
    

    const handleSavePortofolio = ()=>{

    }

    const handleSaveBack = ()=>{
        router.push('/portofolio')
    }

    const handleOnChange = (e:React.ChangeEvent<HTMLElement> | { target: { name: string; files: FileList } })=>{

    }

  return (
    <div className='p-base flex flex-col space-y-lg'>
        <section className='flex space-x-md'>
            <Button variant={"outline"} onClick={handleSaveBack}>
                Kembali
            </Button>
            <Button onClick={handleSavePortofolio}>
                Simpan Perubahan
            </Button>
        </section>

        <form>
          <Card>
            <div className='flex flex-between'>
              <label className='underline'>Background Image</label>
            </div>
            <InputUploadFile onChangeCustome={handleOnChange} name={"background_iamge"}/>
          </Card>
        </form>
    </div>
  );
};

export default FormEditPortofolio;
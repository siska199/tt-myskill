"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../shared/button';

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
  return (
    <div className='p-base'>
        <section className='flex space-x-md'>
            <Button variant={"outline"} onClick={handleSaveBack}>
                Kembali
            </Button>
            <Button onClick={handleSavePortofolio}>
                Simpan Perubahan
            </Button>
        </section>
        <section>
          
        </section>
    </div>
  );
};

export default FormEditPortofolio;
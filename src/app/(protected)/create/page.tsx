"use client"
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'


type FormInput={
    repoUrl:string
    projectName:string
    githubToken?:string
}
const CreatePage = () => {
const {register,handleSubmit,reset}=useForm<FormInput>();

function onSubmit(data:FormInput) {
    window.alert(data);
    return true
}
  return (
    <div className='flex items-center gap-12 h-ful justify-center'>
        <img src="/undraw_github.svg" className='h-56 w-auto my-50'/>
    <div>
        <div>
            <h1 className='font-semibold text-2xl'>
                Link Your Github Repository
            </h1>
            <p className='text-sm text-muted-foreground'>
                Enter the URL of your repository
            </p>
        </div>
        <div className='h-4'></div>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
            {...register('repoUrl', {required:true})}
            placeholder='Project Name'
            required
            />
</form> 
        </div>
    </div>
    </div>
    
  )
}

export default CreatePage

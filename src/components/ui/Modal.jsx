import React from 'react'
import { Button } from "./button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog"
import { Input } from "./input"
import { Label } from "./label"

const Modal = () => {
    return (
        <>
            <Dialog>
                <div className="-left-11 fixed h-screen items-center flex z-50">
                    <DialogTrigger className='text-black bg-primary py-2 px-6 rounded-b-2xl -rotate-90 text-xl font-bold uppercase focus:outline-none'>
                        Text us
                    </DialogTrigger>
                </div>
                <DialogContent className='max-w-xs'>
                    <DialogHeader className={'mt-4'}>
                        <DialogTitle className='text-center text-gray-800 font-normal'>Chat with Cubix.</DialogTitle>
                    </DialogHeader>
                    <Input id="name" placeHolder="Enter your phone number" className='text-center py-6 mt-4' />
                    <p className='text-center text-gray-500 text-sm'>Live representative responds immediately</p>
                    <DialogFooter>
                        <Button type="submit" className='w-full py-6 hover:bg-primary'>Start Text Chat</Button>
                    </DialogFooter>
                    <p className='text-center text-gray-500 text-xs'>Powered By<span className='font-bold'> Liveforce
                            Standard SMS charges may apply*
                        </span>
                    </p>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Modal
import React from 'react'
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
const MobileNavbar = () => {
  return (
    <div>
    <Sheet>
    <SheetTrigger ><Menu/></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetDescription>
        <ul className="py-4 text-zinc-950 flex justify-center items-center
             gap-2">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Gallery</li>
                    <li className='text-sm'>Contact Us</li>
            </ul>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  </div>
  )
}

export default MobileNavbar
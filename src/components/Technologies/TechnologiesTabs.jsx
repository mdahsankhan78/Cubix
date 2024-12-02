import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../ui/tabs"
import ButtonwithImage from '../ui/ButtonwithImages'

const TechnologiesTabs = () => {
    return (
        <Tabs defaultValue='mobile'>
            <div className="grid grid-cols-4 border-t border-gray-300 gap-x-12" >
                <div className="col-span-1 border-r border-gray-300 py-12">
                <TabsList>
                    <TabsTrigger value='mobile'>Mobile Apps</TabsTrigger>
                    <TabsTrigger value='web'>Web Platforms</TabsTrigger>
                    <TabsTrigger value='cross'>Cross Platforms</TabsTrigger>
                    <TabsTrigger value='games'>Games</TabsTrigger>
                    <TabsTrigger value='database'>Database</TabsTrigger>
                    <TabsTrigger value='cloud'>Cloud & DevOps</TabsTrigger>
                </TabsList>
                </div>

                <div className="col-span-2 my-6">
                    <TabsContent value='mobile'>
                        <h1 className='text-black text-2xl font-semibold'>iOS</h1>

                        <div className="grid grid-cols-3 my-4">
                        <ButtonwithImage text={'Swift'} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} />
                        </div>
                    </TabsContent>
                </div>
            </div>


        </Tabs>
    )
}

export default TechnologiesTabs
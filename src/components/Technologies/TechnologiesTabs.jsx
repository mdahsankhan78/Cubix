import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../ui/tabs"
import ButtonwithImage from '../ui/ButtonwithImages'
import { Cloud, CrossPlatforms, Database, Games, MobileApps, WebApps } from '../../data/Technologies'

const TechnologiesTabs = () => {
    return (
        <Tabs defaultValue='mobile'>
            <div className="grid grid-cols-4 border-t border-gray-300 gap-x-12" >
                <div className="col-span-1 border-r border-gray-300 py-12">
                    <TabsList>
                        <TabsTrigger value='mobile' className='data-[state=active]:bg-gradient-to-r from-[#89EDB1] to-white'>Mobile Apps</TabsTrigger>
                        <TabsTrigger value='web' className='data-[state=active]:bg-gradient-to-r from-[#89EDB1] to-white'>Web Platforms</TabsTrigger>
                        <TabsTrigger value='cross' className='data-[state=active]:bg-gradient-to-r from-[#89EDB1] to-white'>Cross Platforms</TabsTrigger>
                        <TabsTrigger value='games' className='data-[state=active]:bg-gradient-to-r from-[#89EDB1] to-white'>Games</TabsTrigger>
                        <TabsTrigger value='database' className='data-[state=active]:bg-gradient-to-r from-[#89EDB1] to-white'>Database</TabsTrigger>
                        <TabsTrigger value='cloud' className='data-[state=active]:bg-gradient-to-r from-[#89EDB1] to-white'>Cloud & DevOps</TabsTrigger>
                    </TabsList>
                </div>

                <div className="col-span-3 w-3/4 my-6">
                    <TabsContent value='mobile'>
                        <h1 className='text-black text-2xl font-semibold'>iOS</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {MobileApps.iOS.map((ios) => (
                                <ButtonwithImage text={ios.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={ios.img} />
                            ))}
                        </div>

                        <h1 className='text-black text-2xl font-semibold mt-6'>Android</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {MobileApps.Android.map((android) => (
                                <ButtonwithImage text={android.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={android.img} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value='web'>
                        <h1 className='text-black text-2xl font-semibold'>Frontend</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {WebApps.Frontend.map((frontend) => (
                                <ButtonwithImage text={frontend.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={frontend.img} />
                            ))}
                        </div>

                        <h1 className='text-black text-2xl font-semibold mt-6'>Backend</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {WebApps.Backend.map((backend) => (
                                <ButtonwithImage text={backend.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={backend.img} />
                            ))}
                        </div>

                        <h1 className='text-black text-2xl font-semibold mt-6'>CMS</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {WebApps.CMS.map((cms) => (
                                <ButtonwithImage text={cms.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={cms.img} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value='cross'>
                        <h1 className='text-black text-2xl font-semibold'>React</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {CrossPlatforms.React.map((react) => (
                                <ButtonwithImage text={react.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={react.img} />
                            ))}
                        </div>

                        <h1 className='text-black text-2xl font-semibold mt-6'>Flutter</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {CrossPlatforms.Flutter.map((flutter) => (
                                <ButtonwithImage text={flutter.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={flutter.img} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value='games'>
                        <h1 className='text-black text-2xl font-semibold'>Engines</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {Games.Engines.map((engine) => (
                                <ButtonwithImage text={engine.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={engine.img} />
                            ))}
                        </div>

                        <h1 className='text-black text-2xl font-semibold mt-6'>Servers</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {Games.Servers.map((server) => (
                                <ButtonwithImage text={server.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={server.img} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value='database'>
                        <h1 className='text-black text-2xl font-semibold'>Database</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {Database.Database.map((database) => (
                                <ButtonwithImage text={database.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={database.img} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value='cloud'>
                        <h1 className='text-black text-2xl font-semibold'>DevOps</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {Cloud.DevOps.map((dev) => (
                                <ButtonwithImage text={dev.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={dev.img} />
                            ))}
                        </div>

                        <h1 className='text-black text-2xl font-semibold mt-6'>Cloud</h1>
                        <div className="grid grid-cols-3 gap-4 my-4">
                            {Cloud.Cloud.map((cloud) => (
                                <ButtonwithImage text={cloud.text} bg={'bg-muted'} hoverbg={'hover:bg-black'} color={'black'} img={cloud.img} />
                            ))}
                        </div>
                    </TabsContent>
                </div>
            </div>


        </Tabs>
    )
}

export default TechnologiesTabs
import React from "react";
import { ClientsTimeline } from "../ui/clientstimeline";

export function ClientsContent() {
    const data = [
        {
            name: 'Jackie Dallas, Director',
            dp: "JD",
            review: '"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."',
            image: "clients1.svg"
        },

        {
            name: 'Jackie Dallas, Director',
            dp: "JD",
            review: '"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."',
            image: "clients2.svg"
        },

        {
            name: 'Jackie Dallas, Director',
            dp: "JD",
            review: '"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."',
            image: "clients3.svg"
        },

        {
            name: 'Jackie Dallas, Director',
            dp: "JD",
            review: '"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."',
            image: "clients4.svg"
        },

    ];
    return (
        (<div className="w-full">
            <ClientsTimeline data={data} />
        </div>)
    );
}

import "./globals.css";
import React from "react";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <div style={{position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundImage: `url('/mountain.png')`, backgroundPosition: '0% 65%', backgroundRepeat: "no-repeat", backgroundSize: 'cover',zIndex: '-1'}}>
            <div
            style={{width:'100%', height:'60%', background: 'linear-gradient(225deg, #5596FF 0%, #AC2DEB 100%)', opacity: '70%', zIndex: '-1', position: 'absolute'}}
            />
            <div style={{width: '100%', height: '40%', position: 'absolute', zIndex: '0', left: 0, bottom: 0, backgroundColor: 'white'}}/>
        </div>
        <div style={{zIndex: '2', position: 'relative', paddingTop:"75px", paddingBottom: '55px', maxWidth: '540px', margin: '0 auto'}}>
            {children}
        </div>
        </body>
        </html>
    );
}

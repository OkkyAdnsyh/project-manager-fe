import { IRegistration } from "@/globalType/interfaces/Interfaces";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request : NextRequest) {
    const req : Promise<IRegistration> = await request.json();
    
    const res = await fetch('http://localhost:5000/api/v1/user-register', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
    .then(
        res => res.json()
    );

    // set cookies
    if(!res.ok) return NextResponse.json({message : res.message}, {status : res.status});

    return NextResponse.json({message : res.message}, {status : res.status});
}
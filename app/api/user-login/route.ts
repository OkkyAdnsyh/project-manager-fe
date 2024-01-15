import { NextResponse } from "next/server";

export async function POST(request : Request){
    const body = await request.json();

    const res = await fetch('http://localhost:5000/v1/api/user-login', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(body)
    })
    .then(
        (res) => res.json()
    )

    if(!res.ok){
        return
    }

    return NextResponse.json({body}, {status : 200})
}
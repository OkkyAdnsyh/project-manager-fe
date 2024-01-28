import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request : Request){
    const body = await request.json();
    const response = NextResponse.next();

    const cookiesStore = cookies();
    cookiesStore.set('role', 'client');

    return NextResponse.json({message : 'client'}, {status : 200});
}
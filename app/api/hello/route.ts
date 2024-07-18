import { NextResponse } from "next/server";
// import path from "path";
// import fs from "fs"
export async function GET(){
  // const filePath = path.join(process.cwd(), "/Policy.txt");
  // const content = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json({
    hello:"world"
  })
}
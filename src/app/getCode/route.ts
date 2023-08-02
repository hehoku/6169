// import { NextResponse } from "next/server";

// export async function GET(request: Request) {

//   return NextResponse.json({ text: "hello" });
// }

const Chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const CodeLength = 6;
const Salt = 233;
const Prime = 7;
const Prime2 = 5;
const Base = Chars.length;

function genCode(id: number) {
  let b = Array(CodeLength).fill(0);
  let res = "";

  let pid = id * Prime + Salt; // Amplify
  b[0] = pid;
  for (let i = 0; i < CodeLength - 1; i++) {
    b[i + 1] = Math.floor(b[i] / Base);
    b[i] = (b[i] + i * b[0]) % Base;
  }

  // Checksum
  for (let i = 0; i < CodeLength - 1; i++) {
    b[CodeLength - 1] += b[i];
  }
  b[CodeLength - 1] = (b[CodeLength - 1] * Prime) % CodeLength;

  for (let i = 0; i < CodeLength; i++) {
    res += Chars[b[(i * Prime2) % CodeLength]]; // Shuffle
  }

  console.log(res);
  return res;
}

function decode(code: String) {
  if (code.length != CodeLength) {
    return -1;
  }
  let b = Array(CodeLength).fill(0);

  // Unshuffle
  for (let i = 0; i < CodeLength; i++) {
    b[(i * Prime2) % CodeLength] = i;
  }

  // Convert back to Chars index
  for (let i = 0; i < CodeLength; i++) {
    let j = Chars.indexOf(code[b[i]]);
    if (j === -1) {
      return -1; // Invalid character check
    }
    b[i] = j;
  }

  // Validation
  let expect = 0;
  for (let i = 0; i < CodeLength - 1; i++) {
    expect += b[i];
  }
  expect = (expect * Prime) % CodeLength;
  if (b[5] != expect) {
    return -1;
  }

  // Reverse function
  for (let i = CodeLength - 2; i >= 0; i--) {
    b[i] = (b[i] - i * (b[0] - Base)) % Base;
  }

  let res = 0;
  for (let i = CodeLength - 2; i > 0; i--) {
    res += b[i];
    res *= Base;
  }

  // Reverse amplify
  res = (res + b[0] - Salt) / Prime;

  console.log(res);
  return res;
}


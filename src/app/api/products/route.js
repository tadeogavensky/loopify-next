import { NextResponse } from "next/server";
const connection = require("@/db/db");

export async function GET(request) {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM products", (error, results, fields) => {
      if (error) {
        console.error("Error executing query:", error);
        reject(new Error("An error occurred while fetching products."));
      } else {
        const products = results.map((result) => result);
        resolve(NextResponse.json({ products }));
      }
    });
  });
}

export async function POST(request) {
  const { product } = await request.json(); 

  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO plans (plan) VALUES (?)",
      [plan],
      (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(new Error("An error occurred while saving the plan."));
        } else {
          resolve(NextResponse.json({ message: "Plan saved successfully." }));
        }
      }
    );
  });
}

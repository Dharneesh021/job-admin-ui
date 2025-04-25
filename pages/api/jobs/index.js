// pages/api/jobs/index.js
import pool from "@/lib/db";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM jobs ORDER BY id DESC");
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch jobs" });
    }
  } else if (req.method === "POST") {
    const { title, company, location, type, salaryTo, description, deadline } =
      req.body;

    try {
      const result = await pool.query(
        `INSERT INTO jobs 
        (title, company, location, type, salary, description, posted)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`,
        [title, company, location, type, salaryTo, description, deadline]
      );

      res.status(201).json({
        message: "Job added successfully",
        job: result.rows[0],
      });
    } catch (error) {
      console.error("Insert error:", error);
      res.status(500).json({ message: "Failed to add job" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import { getConnection } from "@/lib/db";

export default async function handler(req, res) {

  try {

    const pool = await getConnection();

    if (req.method === "GET") {

      const result = await pool
        .request()
        .query(`
          SELECT
            Id,
            Name,
            LastName,
            Phone
          FROM [User]
          ORDER BY Id DESC
        `);

      return res.status(200).json(result.recordset);
    }
    if (req.method === "POST") {

  const { Name, LastName, Phone } = req.body;

  if (!Name || !LastName) {
    return res.status(400).json({
      message: "Name and LastName are required",
    });
  }

  const result = await pool
    .request()
    .input("Name", Name)
    .input("LastName", LastName)
    .input("Phone", Phone || null)
    .query(`
      INSERT INTO [User]
        (Name, LastName, Phone)
      OUTPUT INSERTED.*
      VALUES
        (@Name, @LastName, @Phone)
    `);

  return res.status(201).json(result.recordset[0]);
}

    return res.status(405).json({
      message: "Method not allowed",
    });
    

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Database error",
    });
  }
}

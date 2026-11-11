import { getConnection } from "@/lib/db";

export default async function handler(req, res) {

  try {

    const pool = await getConnection();

    const { id } = req.query;

    if (req.method === "PUT") {

      const { Name, LastName, Phone } = req.body;

      const result = await pool
        .request()
        .input("Id", id)
        .input("Name", Name)
        .input("LastName", LastName)
        .input("Phone", Phone || null)
        .query(`
          UPDATE [User]
          SET
            Name = @Name,
            LastName = @LastName,
            Phone = @Phone
          OUTPUT INSERTED.*
          WHERE Id = @Id
        `);

      if (result.recordset.length === 0) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json(result.recordset[0]);
    }
    if (req.method === "DELETE") {

  const result = await pool
    .request()
    .input("Id", id)
    .query(`
      DELETE FROM [User]
      OUTPUT DELETED.*
      WHERE Id = @Id
    `);

  if (result.recordset.length === 0) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.status(200).json({
    message: "User deleted successfully",
    user: result.recordset[0],
  });
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
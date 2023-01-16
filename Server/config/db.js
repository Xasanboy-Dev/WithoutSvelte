import pg from "pg"
const Pool = pg.Pool
export const pool = new Pool({
    user:"postgres",
    password:"1234",
    database:"postgres",
    port:5432,
    host:"localhost"
})
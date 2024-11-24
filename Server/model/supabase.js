/*  B"H
 */
require("dotenv").config()
const { createClient } = require("@supabase/supabase-js")

module.exports = {
    getConnection() {
        return createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_SECRET_KEY
        )
    },
}

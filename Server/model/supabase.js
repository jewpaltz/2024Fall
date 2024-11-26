/*  B"H
 */
require("dotenv").config()
const { createClient } = require("@supabase/supabase-js")

/**
 * @typedef {import('../../Client/src/models/supabase').Database } ProductDatabase
 * @typedef {import('@supabase/supabase-js').SupabaseClient<ProductDatabase>} ProductClient
 */

module.exports = {
    /**
     * @returns {ProductClient}
     */
    getConnection() {
        return createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_SECRET_KEY
        )
    },
}

const { Clerk } = require("@clerk/clerk-sdk-node")

// @TODO move 🪦
const clerk = Clerk({ secretKey: process.env.CLERK_SECRET_KEY })

/**
 * Authenticates a user based on the session token provided in the request headers.
 * The function checks for a valid session token, verifies the session with Clerk,
 * and extracts the userId from the session. If the token is invalid, missing, or
 * if the userId cannot be retrieved, it sends a 401 Unauthorized response.
 *
 * @param {object} req - The Express.js request object
 * @param {object} res - The Express.js res object
 * @param {function} next - The next function
 *
 * @throws Will send a 401 Unauthorized response with an error message if authentication fails.
 */

async function authenticateUser(req, res, next) {
    try {
        const sessionToken = req.headers.authorization?.split("Bearer ")[1]

        if (!sessionToken) {
            return res.status(401).json({ error: "No session token provided" })
        }

        // Networkless verification
        const claims = await clerk.verifyToken(sessionToken)
        const userId = claims.sub
        console.log(claims)

        if (!userId) {
            return res.status(401).json({ error: "Malformed session token" })
        }

        req.userId = userId
        next()
    } catch (error) {
        console.error("Authentication error:", error)
        res.status(401).json({ error: "Authentication failed" })
    }
}

module.exports = { authenticateUser }

import User from "../models/user.model.js";
import bcrypt from 'bcrypt';


export const loginPage = async(req,res)=>{
    const title = "Log In Page";
    
    try {
        res.render('index',{
            title
        });
    } catch (error) {
        throw error;
    }
};


export async function loginProcess (req, res) {
    try {
        // Get the password and divisi_name from the request body
        const { password, email } = req.body;

        // Find the user in the database based on divisi_name
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            // Save user information in session
            req.session.user = {
                id: user._id,
                email: user.email,
                role: user.role, // Menyimpan role pengguna ke sesi
                nama_lengkap: user.nama_lengkap // Menyimpan nama lengkap pengguna ke ses
            };

            res.redirect('/adm/dashboard');
        } else {
            res.send("Invalid password");
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).send("Login failed");
    }
};

export async function logout(req, res) {
    req.session.destroy(err => {
        if (err) {
            console.error("Logout error:", err);
            return res.status(500).send("Logout failed");
        }
        res.redirect('/'); // Redirect ke halaman login setelah logout
    });
}
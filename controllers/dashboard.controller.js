export const dashboardPage = async(req,res)=>{
    const title = "Dashboard";
    
    try {
        res.render('dashboard',{
            title
        });
    } catch (error) {
        throw error;
    }
};
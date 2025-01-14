const projectURL = "https://jmcchntnmrblzbjeyfyy.supabase.co";
const projectAPI = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptY2NobnRubXJibHpiamV5Znl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzAyNDcsImV4cCI6MjA1MjQ0NjI0N30.1a63qBpT0il6477fYM-m1J1U9YGEGH05J2Y6RGeIMGY";
export const supabaseClient = supabase.createClient(projectURL, projectAPI);


const addData = async () => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: 'naveed@gmail.com',
            password: '12345678',
        });

        if (error) {
            console.error('Error signing up:', error.message);
        } else {
            console.log('Sign-up successful:', data);
        }
    } catch (error) {
        console.error('Unexpected error:', error);
    }
}


addData()
window.addData = addData
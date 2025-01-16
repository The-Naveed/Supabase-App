const sup = supabase.createClient("https://jmcchntnmrblzbjeyfyy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptY2NobnRubXJibHpiamV5Znl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzAyNDcsImV4cCI6MjA1MjQ0NjI0N30.1a63qBpT0il6477fYM-m1J1U9YGEGH05J2Y6RGeIMGY")


// Creating C R U D 

// C R E A T E
const addData = async _ => {
    const info = {
        firstName: "Naveed",
        lastName: "Ahmed",
        age: 25,
        country: "Pakistan",
        city: "Karachi"
    };
    try {
        const { data, error } = await sup
            .from('data')
            .insert(info)
            .select()

        console.log(data);
        console.log(error);

    } catch (error) {
        console.log(error);
    }
}
// addData();

// R E A D
const readata = async _ => {
    try {
        const { data, error } = await sup
            .from('data')
            .select()

        console.log(data);
        console.log(error);

    } catch (error) {
        console.log(error);
    }
}

// readata()

// U P D A T E
const updateData = async _ => {
    try {
        const { data, error } = await sup
            .from('data')
            .update({ country: 'Australia' })
            .eq('id', 13)
            .select()

        console.log(data);
        console.log(error);
    } catch (error) {
        console.log(error);
    }
}

// updateData()

// D E L E T E
const delData = async _ => {
    try {
        const { data, error } = await sup
            .from('data')
            .delete()
            .eq('id', 12)
            .select()

        console.log(data);
        console.log(error);
    } catch (error) {
        console.log(error);
    }
}

// delData()
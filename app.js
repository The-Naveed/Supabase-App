const sup = supabase.createClient("https://jmcchntnmrblzbjeyfyy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptY2NobnRubXJibHpiamV5Znl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzAyNDcsImV4cCI6MjA1MjQ0NjI0N30.1a63qBpT0il6477fYM-m1J1U9YGEGH05J2Y6RGeIMGY")



// Create a new user
const addNewUser = async _ => {
    // try {
    //     const { data, error } = await sup.auth.signUp({
    //         email: 'naveedpstc@gmail.com',
    //         password: '12345678',
    //     })
    //     console.log(data);
    //     console.log(error);
    // } catch (error) {
    //     console.log(error);
    // }
}

// addNewUser()

// Sign in a user
const signUp = async _ => {
    try {
        const { data, error } = await sup.auth.signInWithPassword({
            email: 'naveedpstc@gmail.com',
            password: '12345678',
        })
        console.log(data);
        console.log(error);
    } catch (error) {
        console.log(error);
    }
};

// signUp()

// Creating C R U D 

// C R E A T E
const addData = async _ => {

    let task = document.querySelector("#task").value
    if (!task) {
        alert("Please Enter Some Data");
        return
    };

    const info = {
        firstName: task,
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

    readata()
};

// R E A D
const readata = async _ => {
    try {
        const { data, error } = await sup
            .from('data')
            .select()

        let user = document.querySelector("#user")
        let taskData = document.querySelector("#taskData")
        let task = document.querySelector("#task").value
        taskData.innerHTML = `` 

        for (let key in data) {
            console.log(data[key]);
            taskData.innerHTML +=
                `
                    <div class="user" id="user">
                    <h3 id="getTask">${data[key].id}</h3>
                    <h3 id="getTask">${data[key].firstName}</h3>
                    <button onclick="updateData(this)">Edit</button>
                    <button onclick="delData(this)">Delete</button>
                </div>
            `
            task = document.querySelector("#task").value = ``
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }

}

// readata()

// U P D A T E
const updateData = async (ele) => {
    let task = document.querySelector("#task")
    task = document.querySelector("#task").value = ele.previousElementSibling.innerHTML
    ele.parentElement.remove()

    // try {
    //     const { data, error } = await sup
    //         .from('data')
    //         .update({ firstName:ele.previousElementSibling.innerHTML})
    //         .eq('id', 13)
    //         .select()

    //     console.log(data);
    //     console.log(error);
    // } catch (error) {
    //     console.log(error);
    // }
}

// updateData()

// D E L E T E
const delData = async (ele) => {
    ele.parentElement.remove()


    // try {
    //     const { data, error } = await sup
    //         .from('data')
    //         .delete()
    //         .eq('id', 0)
    //         .select()

    //     console.log(data);
    //     console.log(error);
    // } catch (error) {
    //     console.log(error);
    // }
}

// delData()


window.addData = addData
window.delData = delData
window.updateData = updateData
window.readata = readata
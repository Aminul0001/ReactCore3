

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" /> <br />
            <input type="email" name="email" /> <br />
            <input type="submit" name="submit" />
            <input type="submit" name="submit" />
            <input type="submit" name="submit" />
        </form>

        </div>
    );
};
 
export default SimpleForm;


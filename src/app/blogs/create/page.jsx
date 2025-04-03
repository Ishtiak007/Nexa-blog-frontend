import BlogForm from "@/components/ui/BlogForm";


const CreateBloge = () => {
    const handleFormSubmit = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <BlogForm />
        </div>
    );
};

export default CreateBloge;
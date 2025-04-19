import { Slide, toast, ToastContainer } from "react-toastify";
import SectionTitle from "../shared/SectionTitle";
import { useState } from "react";

const ContactMe = () => {
    const [newMessage, setNewMessage] = useState(null);

    const handleMessageSubmit = (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;

        const userMsg = { firstName, lastName, email, phone, message };

        if (newMessage && JSON.stringify(newMessage) === JSON.stringify(userMsg)) {
            return toast.error("Please enter a new message");
        } else {
            setNewMessage(userMsg);
            toast.success("Message sent successfully");
        }
    };

    return (
        <div id="contact">
            <SectionTitle title="Let's Work Together" subtitle="I design and code beautifully simple things and i love what i do. Just simple like that!" />
            <div className="">
                <div className="text-center my-4">
                    <p className="object-f my-2 bg-purple-900 py-3 text-white font-semibold"> Phone: +8801927147***</p>
                    <h3 className="my-2 bg-purple-900 py-3 text-white font-semibold"> Email: <a href="mailto:adib.abc2022@gmail.com">adib.abc2022@gmail.com</a></h3>
                </div>
                <div className="border">
                    <form onSubmit={handleMessageSubmit} className="card-body">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                            <div className="">
                                <input type="text" name="firstName" placeholder="First Name" className="w-full input  bg-slate-900 text-white p-6 font-bold" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="lastName" placeholder="Last Name" className="w-full input input-bordered bg-slate-900 text-white p-6 font-bold" />
                            </div>
                            <div className="">
                                <input type="email" name="email" placeholder="Email" className="w-full input input-bordered bg-slate-900 text-white p-6 font-bold" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="phone" placeholder="Phone" className="w-full input input-bordered bg-slate-900 text-white p-6 font-bold" required />
                            </div>
                        </div>
                        <textarea name="message" placeholder="Write your message here..." className="input input-bordered w-full bg-slate-900 text-white p-6 h-32 font-bold" required />
                        <div className="form-control mt-6">
                            <button type="submit" className="customized-btn">Send Message</button>
                        </div>
                    </form>
                </div>
                <div>

                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
        </div>
    );
};

export default ContactMe;
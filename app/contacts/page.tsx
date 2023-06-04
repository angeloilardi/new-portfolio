
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import Form from "../components/ContactForm";

export default function Contacts() {
  return (
    <><Navbar></Navbar>
      <div className="bg-blue-200 min-h-screen">
        <Form></Form>
      </div>
    </>
  );
}

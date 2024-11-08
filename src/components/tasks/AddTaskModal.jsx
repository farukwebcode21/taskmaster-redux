import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, reset } = useForm();
  const onSubmit = (title, description, date, priority, assingedTo) =>
    console.log(title, description, date, assingedTo, priority);

  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };

  const handleSubmit = (data) => {
    console.log(data);
    handleCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Redux Learning"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            className="rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
          <label htmlFor="title">Description</label>
          <textarea
            className="rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
          <label htmlFor="title">Deadline</label>
          <input
            className="rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
          <label htmlFor="title">Assingn to</label>
          <select id="assingedTo" {...register("assingedTo")}>
            <option value={"Faruk Ahmad"}>Faruk Ahamd</option>
            <option value={"Rashel Ahmad"}>Rashel Ahamd</option>
            <option value={"Mir Hussain"}>Mir Hussain</option>
            <option value={"Mezba Abedin"}>Mezba Abedin</option>
            <option value={"Mizanur Rahmad"}>Mizanur Rahmand</option>
            <option value={"Tanmoy Parvez"}>Tanmoy Parvez</option>
            <option value={"Fahim Ahmed Firoz"}>Fahim Ahmed Firoz</option>
            <option value={"Rahatul Islam"}>Rahatul Islam</option>
            <option value={"Samin Israr Ravi"}>Samin Israrr Ravi</option>
            <option value={"Mehedi Anik"}>Mehedi Anik</option>
          </select>
          <label htmlFor="title">Priority</label>
          <select id="priority" {...register("priority")}>
            <option defaultValue value={"high"}>
              High
            </option>
            <option value={"medium"}>Medium</option>
            <option value={"low"}>Low</option>
          </select>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => handleCancel()}
              type="button"
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;

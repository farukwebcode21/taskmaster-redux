import { useDispatch } from "react-redux";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };
  const onSubmit = (data) => {
    dispatch(addTask(data));
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
            <option value={"Mir Hussain"}>Mir Shanto</option>
            <option value={"Mezba Abedin"}>Mozibur Hossain</option>
            <option value={"Mizanur Rahmad"}>Mizan Ali</option>
            <option value={"Tanmoy Parvez"}> Parvez Hasan</option>
            <option value={"Fahim Ahmed Firoz"}>Faruk Ahmed Rupon</option>
            <option value={"Rahatul Islam"}>Robiul Islam</option>
            <option value={"Samin Israr Ravi"}>Kallyan</option>
            <option value={"Mehedi Anik"}>Rostom Hossain</option>
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

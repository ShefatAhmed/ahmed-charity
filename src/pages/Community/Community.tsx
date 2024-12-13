import { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  useAddCommentMutation,
  useGetAllCommentsQuery,
} from "../../redux/features/coummunity/coummunityApi";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
const modalStyles = {
  content: {
    width: "300px",
    height: "200px",
    margin: "auto",
    borderRadius: "8px",
  },
};
const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const [heading, setHeading] = useState("");
  const [comment, setComment] = useState("");
  const userData = useAppSelector(selectCurrentUser);
  const currentDate = new Date().toLocaleDateString();

  const handleHeadingChange = (e: any) => {
    setHeading(e.target.value);
  };

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  };

  const { data: comments, refetch } = useGetAllCommentsQuery(undefined);
  const [addCommentMutation] = useAddCommentMutation();

  const handleSubmit = async () => {
    try {
      const response = await addCommentMutation({
        name: userData?.name,
        heading: heading,
        comment: comment,
        date: currentDate,
      });
      Swal.fire({
        icon: "success",
        title: "Comment Added",
        text: "Your comment has been added successfully.",
      });
      addCommentMutation(response);
      setHeading("");
      setComment("");
      refetch();
      handleCloseModal();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error adding your comment. Please try again.",
      });
    }
  };

  return (
    <div className="mx-4 my-8 sm:mx-8 md:mx-16 lg:mx-24">
      <div className="border-2 border-gray-200 shadow-lg rounded-lg p-6">
        <h1 className="text-center font-bold mt-8">
          Here's our recent community comment
        </h1>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-4">
          {comments?.map((comment: any) => (
            <div key={comment._id}>
              <div className="flex justify-start items-center gap-5 mb-2">
                {comment.name && (
                  <h1 className="font-bold uppercase">{comment.name}.</h1>
                )}
                {comment.date && <p>{comment.date}</p>}
              </div>
              {comment.heading && (
                <h1 className="text-2xl font-semibold mb-2">
                  {comment.heading}
                </h1>
              )}
              {comment.comment && <p>{comment.comment} :)</p>}
              {comment.comment && <hr className="my-3" />}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="btn glass bg-teal-500 rounded-lg text-white px-5 text-center hover:bg-teal-800 mx-3"
            onClick={() => handleOpenModal()}
          >
            Write a Comment
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Edit Modal"
        style={modalStyles}
      >
        <div>
          <div className="flex gap-2 flex-col mt-5">
            <input
              type="text"
              placeholder="name"
              className="border p-2 rounded-lg hidden"
              value={userData?.name}
            />
            <label htmlFor="heading">Title</label>
            <input
              type="text"
              placeholder="Title"
              className="border p-2 rounded-lg"
              value={heading}
              onChange={handleHeadingChange}
            />
            <label htmlFor="comment">Comment</label>
            <textarea
              placeholder="Your comment..."
              className="border p-2 rounded-lg"
              value={comment}
              onChange={handleCommentChange}
            />
            <button
              className="bg-teal-500 text-white hover:bg-teal-800 w-full rounded-lg py-1 glass"
              onClick={handleSubmit}
            >
              Add Comment
            </button>
            <button
              className="bg-red-500 text-white hover:bg-red-800 w-full rounded-lg py-1 glass"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Community;

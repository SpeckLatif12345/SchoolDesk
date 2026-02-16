import { toast } from "react-toastify";

function confirmDelete(onConfirm, message) {
  toast(
    ({ closeToast }) => (
      <div className="space-y-3">
        <p className="font-medium">
          {message || "Are you sure you want to delete this item?"}
        </p>

        <div className="flex gap-2 justify-end">
          <button
            onClick={() => {
              onConfirm();
              closeToast();
            }}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Yes, delete
          </button>

          <button
            onClick={closeToast}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
    },
  );
}
export default confirmDelete;

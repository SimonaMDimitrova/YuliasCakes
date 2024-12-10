import AddComment from "../models/add-comment.model";

function getAllComments(setComments: Function) {
    fetch("https://localhost:44315/api/Comments/GetAll") // use constants instead ???
            .then((response) => response.json())
            .then((data) => setComments(data))
            .catch((error) => console.error("Error fetching data:", error));
}

async function addComment(addComment: AddComment, onRefresh: Function) {
    fetch("https://localhost:44315/api/Comments/Add", {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json", // Specify the data format
        },
        body: JSON.stringify(addComment), // Convert to JSON string
      })
      .then(() => onRefresh())
      .catch((error) => console.error("Error fetching data:", error));
}

export default { getAllComments, addComment }
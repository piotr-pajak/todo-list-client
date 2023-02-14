const apiUrl = "http://localhost:3000/todos";

export const getAllToDos = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });
    if (response.ok) {
      return response.json();
    }
    return {
      success: false,
      error: "Request failed with status code: " + response.status,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const createToDo = async (todo) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo }),
    });

    if (response.ok) {
      return response.json();
    }
    return {
      success: false,
      error: "Request failed with status code: " + response.status,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const editTodo = async (id, todo) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, todo }),
    });
    if (response.ok) {
      return response.json();
    }
    return {
      success: false,
      error: "Request failed with status code: " + response.status,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const toggleFinishedValue = async (id, finished) => {
  try {
    const response = await fetch(`${apiUrl}/toggleFinishedValue/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, finished }),
    });
    if (response.ok) {
      return response.json();
    }
    return {
      success: false,
      error: "Request failed with status code: " + response.status,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteToDo = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      return response.json();
    }
    return {
      success: false,
      error: "Request failed with status code: " + response.status,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

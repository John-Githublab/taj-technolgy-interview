interface ApiResponse {
  returncode: number;
  errors?: { errormsg: string }[];
  [key: string]: any; // To handle additional properties in the API response
}

interface RequestConfig extends RequestInit {
  headers: Record<string, string>;
}

const APIRequest = {
  request: async function (
    method: string,
    url: string,
    body: string | object = ""
  ): Promise<ApiResponse> {
    let config: RequestConfig = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    if (localStorage.getItem("token")) {
      config.headers.authToken = localStorage.getItem("token") || "";
    }

    if (body !== "") {
      config = {
        ...config,
        body: typeof body === "string" ? body : JSON.stringify(body),
      };
    }

    try {
      const response = await fetch(url, config);

      response.headers.forEach((val, key) => {
        if (
          key === "reconnection" &&
          val === "true" &&
          sessionStorage.getItem("payhub.session")
        ) {
          const userToken = response.headers.get("user-token");
          if (userToken) {
            sessionStorage.setItem("payhub.session", userToken);
          }
        }
      });

      const data = await response.json();
      return this.returnResponse(data);
    } catch (error) {
      return { returncode: 0, errors: [{ errormsg: "Timeout Error." }] };
    }
  },

  returnResponse(data: any): ApiResponse {
    // Optionally transform the response here if needed
    return data;
  },
};

export default APIRequest;
